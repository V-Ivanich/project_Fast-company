import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { validator } from "../../../utils/validator";
import api from "../../../api";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import PropTypes from "prop-types";

const UserEditing = ({ user }) => {
    const qualitiesAll = Object.keys(user.qualities).map((optionName) => ({
        label: user.qualities[optionName].name,
        value: user.qualities[optionName]._id
    }));

    const [data, setData] = useState({
        _id: user._id,
        name: user.name,
        email: user.email,
        profession: user.profession,
        sex: user.sex,
        qualities: qualitiesAll
    });

    const [qualitiesEdit, setQualitiesEdit] = useState({});
    // const [errors, setErrors] = useState({});
    const [professionsEdit, setProfessionsEdit] = useState();

    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessionsEdit(data));
        api.qualities.fetchAll().then((data) => setQualitiesEdit(data));
    }, []);

    console.log(professionsEdit);
    const hist = useHistory();

    // const validatorConfig = {
    //     name: {
    //         isRequired: {
    //             message: "Если нужно сменить имя и фамилию"
    //         }
    //     },
    //     email: {
    //         isRequired: {
    //             message: "Электронная почта обязательна для заполнения"
    //         },
    //         isEmail: {
    //             message: "Email введен некорректно"
    //         }
    //     },
    //     profession: {
    //         isRequired: {
    //             message: "Обязательно выберите вашу профессию"
    //         }
    //     }
    // };
    // const validate = () => {
    //     const errors = validator(data, validatorConfig);
    //     setErrors(errors);
    //     return Object.keys(errors).length === 0;
    // };

    // const isValid = Object.keys(errors).length === 0;

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const isValid = validate();
    //     if (!isValid) return;
    //     console.log(data);
    // };

    // useEffect(() => {
    //     validate();
    // }, [data]);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const parsingData = {
            _id: data._id,
            name: data.name,
            email: data.email,
            profession: Object.values(professionsEdit).find(
                (item) => item._id === data.profession
            ),
            sex: data.sex,
            qualities: data.qualities.map((item) => ({
                _id: item.value,
                name: item.label
            }))
        };
        api.users.update(data._id, parsingData);
        hist.goBack();
    };

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <form onSubmit={handleSubmit}>
                            <label className="form-label">
                                <h2>Форма редактирования</h2>
                            </label>
                            <TextField
                                label="Имя"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                // error={errors.name}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                // error={errors.email}
                            />
                            <SelectField
                                label="Профессия"
                                options={professionsEdit}
                                onChange={handleChange}
                                defaultOption="Choose..."
                                value={data.profession._id}
                                // error={errors.profession}
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
                                options={qualitiesEdit}
                                onChange={handleChange}
                                defaultValue={data.qualities}
                                name="qualities"
                                label="Качества"
                            />
                            <button
                                type="submit"
                                className="btn btn-primary w-100 mx-auto"
                            >
                                Применить изменения
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

UserEditing.propTypes = {
    user: PropTypes.object.isRequired
};
export default UserEditing;
