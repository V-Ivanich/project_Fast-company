import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { validator } from "../../../utils/validator";
import TextField from "../../common/form/textField";
import SelectField from "../../common/form/selectField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import BackHistoryButton from "../../common/backButton";
import { useQualities } from "../../../hooks/useQualities";
import { useProfessions } from "../../../hooks/useProfession";
import { useAuth } from "../../../hooks/useAuth";

const EditUserPage = () => {
    const { userId } = useParams();
    console.log(userId);
    const { currentUser } = useAuth();
    const [data, setData] = useState({
        name: "",
        email: "",
        profession: "",
        sex: "male",
        qualities: []
    });

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

    console.log(currentUser, qualitiesList, professionsList);
    // const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    // const [qualitys, setQualities] = useState([]);
    const [errors, setErrors] = useState({});
    // const [proffession, setProfession] = useState([]);

    const transformData = (data) => {
        return data.map((item) => ({
            label: getQuality(item).name,
            value: getQuality(item)._id
        }));
    };

    useEffect(() => {
        if (!loadingQual && !loadingProf && currentUser) {
            // const { profession, qualities } = currentUser;
            // const qualitiesList = Object.keys(qualities).map((optionName) => ({
            //     value: qualities[optionName]._id,
            //     label: qualities[optionName].name,
            //     color: qualities[optionName].color
            // }));
            // const professionsList = Object.keys(profession).map(
            //     (professionName) => ({
            //         label: profession[professionName].name,
            //         value: profession[professionName]._id
            //     })
            // );
            setData({
                ...currentUser,
                qualities: transformData(currentUser.qualities)
            });
        }

        console.log("lists", qualitiesList, professionsList);
        console.log("data", data);
    }, [currentUser, qualities, professions]);

    // const getProfessionById = (id) => {
    //     for (const prof of professions) {
    //         if (prof.value === id) {
    //             return { _id: prof.value, name: prof.label };
    //         }
    //     }
    // };
    // const getQualities = (elements) => {
    //     const qualitiesArray = [];
    //     for (const elem of elements) {
    //         for (const quality in qualities) {
    //             if (elem === qualities[quality]._id) {
    //                 qualitiesArray.push(qualities[quality]);
    //             }
    //         }
    //     }
    //     return qualitiesArray;
    // };
    // const getQualities = (elements) => {
    //     const qualitiesArray = [];
    //     for (const elem of elements) {
    //         for (const quality in qualities) {
    //             if (elem.value === qualities[quality].value) {
    //                 qualitiesArray.push({
    //                     _id: qualities[quality].value,
    //                     name: qualities[quality].label,
    //                     color: qualities[quality].color
    //                 });
    //             }
    //         }
    //     }
    //     return qualitiesArray;
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handle", data);
        // const isValid = validate();
        // if (!isValid) return;
        // const { profession, qualities } = data;
        // api.users
        //     .update(userId, {
        //         ...data,
        //         professions: getProfessionById(profession),
        //         qualities: getQualities(qualities)
        //     })
        //     .then((data) => history.push(`/users/${data._id}`));
        // console.log({
        //     ...data,
        //     profession: getProfessionById(profession),
        //     qualities: getQualities(qualities)
        // });
    };

    // useEffect(() => {
    //     setIsLoading(true);
    //     api.users.getById(userId).then(({ profession, qualities, ...data }) =>
    //         setData((prevState) => ({
    //             ...prevState,
    //             ...data,
    //             qualities: transformData(qualities),
    //             profession: profession._id
    //         }))
    //     );
    //     api.professions.fetchAll().then((data) => {
    //         const professionsList = Object.keys(data).map((professionName) => ({
    //             label: data[professionName].name,
    //             value: data[professionName]._id
    //         }));
    //         setProfession(professionsList);
    //     });
    //     api.qualities.fetchAll().then((data) => {
    //         const qualitiesList = Object.keys(data).map((optionName) => ({
    //             value: data[optionName]._id,
    //             label: data[optionName].name,
    //             color: data[optionName].color
    //         }));
    //         setQualities(qualitiesList);
    //     });
    // }, []);

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
                    {currentUser && !loadingQual && !loadingProf ? (
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
                                options={qualitiesList}
                                onChange={handleChange}
                                defaultValue={data.qualities}
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
