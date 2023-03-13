import React, { useEffect, useState } from "react";
import { validator } from "../../../utils/validator";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import BackHistoryButton from "../../common/backButton";
import { useHistory, useParams } from "react-router-dom";
import { useQualities } from "../../../hooks/useQualities";
import { useProfessions } from "../../../hooks/useProfession";
import { useAuth } from "../../../hooks/useAuth";

const EditUserPage = () => {
    const { currentUser, setUpDate } = useAuth();
    const history = useHistory();
    const { userId: id } = useParams();

    const { professions, isLoading: loadingProf } = useProfessions();
    const professionsList =
        !loadingProf &&
        professions.map((prof) => ({
            label: prof.name,
            value: prof._id
        }));

    const { qualities, isLoading: loadingQual, getQuality } = useQualities();
    const qualitiesList =
        !loadingQual &&
        qualities.map((qual) => ({
            label: qual.name,
            value: qual._id,
            color: qual.color
        }));

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const transformData = (data) => {
        return data.map((item) => ({
            label: getQuality(item).name,
            value: getQuality(item)._id,
            color: getQuality(item).color
        }));
    };
    const [data, setData] = useState({});

    useEffect(() => {
        if (!loadingQual && !loadingProf && currentUser) {
            setData((prevState) => ({
                ...prevState,
                ...currentUser,
                qualities: transformData(currentUser.qualities)
            }));
        }
    }, [currentUser, qualities, professions]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const { qualities } = data;
        const upDateUser = qualities.map((qual) => qual.value);
        setUpDate({ ...data, qualities: upDateUser });
        history.replace(`/users/${id}`);
    };

    useEffect(() => {
        if (data && isLoading) setIsLoading(false);
    }, [data]);

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Введите ваше имя"
            }
        }
    };

    useEffect(() => {
        validate();
    }, [data]);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const isValid = Object.keys(errors).length === 0;

    return (
        <div className="container mt-5">
            <BackHistoryButton />
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {currentUser &&
                    data.qualities !== undefined &&
                    !loadingProf ? (
                        <form onSubmit={handleSubmit}>
                            <label className="form-label">
                                <h2>Форма редактирования</h2>
                            </label>
                            <TextField
                                label="Имя"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                error={errors.email}
                            />
                            <SelectField
                                label="Профессия"
                                options={professionsList}
                                onChange={handleChange}
                                defaultOption="Choose..."
                                value={data.profession}
                                name="profession"
                                error={errors.profession}
                            />
                            <RadioField
                                options={[
                                    { name: "Male", value: "male" },
                                    { name: "Female", value: "female" },
                                    { name: "Other", value: "other" }
                                ]}
                                label="Пол"
                                value={data.sex}
                                name="sex"
                                onChange={handleChange}
                            />
                            <MultiSelectField
                                defaultValue={data.qualities}
                                options={qualitiesList}
                                onChange={handleChange}
                                name="qualities"
                                label="Качества"
                            />
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="btn btn-primary w-100 mx-auto"
                            >
                                Применить изменения
                            </button>
                        </form>
                    ) : (
                        "Loading..."
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditUserPage;
