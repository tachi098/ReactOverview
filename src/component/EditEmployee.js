import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import { EmployeeCreator } from "./../states/"
import { useFormik } from "formik";
import * as Yup from "yup";
import { bindActionCreators } from "redux";

export const EditEmployee = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const { udpateEmployee } = bindActionCreators(EmployeeCreator, dispatch)

    const formik = useFormik({
        initialValues: location.state.employee,
        validationSchema: Yup.object({
            name: Yup.string()
                .min(2, "Mininum 2 characters")
                .max(15, "Maximum 15 characters")
                .required("Required!"),
            salary: Yup.number()
                .min(1000, "Min 1000")
                .max(100000, "Max 100000")
                .required("Required!"),
        }),
        onSubmit: values => {
            udpateEmployee(values);
            history.push("/");
        }
    });



    return (
        <div className="col-md-8">
            <h1>Edit employee</h1>
            <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
                    <label>Name:</label>
                    <input type="text" className="form-control" value={formik.values.name} name="name" onChange={formik.handleChange} />
                    {formik.errors.name && formik.touched.name && (
                        <span><p style={{ color: "red" }}>{formik.errors.name}</p></span>
                    )}
                </div>

                <div className="form-group">
                    <label>Salary:</label>
                    <input type="text" className="form-control" value={formik.values.salary} name="salary" onChange={formik.handleChange} />
                    {formik.errors.salary && formik.touched.salary && (
                        <p style={{ color: "red" }}>{formik.errors.salary}</p>
                    )}
                </div>

                <div className="form-group">
                    <label>Gender:</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="0" onChange={() => {formik.setFieldValue("gender", 0)}} checked={formik.values.gender === 0}/>
                        <label className="form-check-label">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="1" onChange={() => {formik.setFieldValue("gender", 1)}} checked={formik.values.gender === 1}/>
                        <label className="form-check-label">
                            Female
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="gender" value="2" onChange={() => {formik.setFieldValue("gender", 2)}} checked={formik.values.gender === 2}/>
                        <label className="form-check-label">
                            Other
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Status:</label>
                    <div className="ml-2 form-check form-check">
                        <input className="form-check-input" type="checkbox" value="true" name="status" onChange={formik.handleChange} checked={formik.values.status}/>
                        <label className="form-check-label">Able</label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-2 me-2">Save</button>
                <button type="button" onClick={() => {history.push("/")}} className="btn btn-warning mt-2">Back</button>
            </form>
        </div>
    )
}