import { getByTitle } from "@testing-library/react";
import { useFormik } from "formik";
import { create } from "../post";




export default function NewPost() {
    const formik = useFormik({
        initialValues: {
            title:'',
            content:''
        },
        validate:function(values){
            let errors = {};
            if(values.title === ""){
                errors.title = "Please provide title field";
            }
            if(values.content === ""){
                errors.content = "Please provide content field";
            }

            return errors;
        },

        onSubmit: async function (values){
            await create(values);
            alert("Post Created Successfully")
        }
    });
    return (
        <>
            <h1 class="title">Create new post
                <br />
                <span class="subtitle"></span>
            </h1>

            <form onSubmit={formik.handleSubmit} method="post" >
                <label for="fname">Post Title</label>
                <input type="text" id="title" name="title" onChange={formik.handleChange} value={formik.values.title} placeholder="Title of the post" />
                {
                    formik.errors.title ? (
                        <small style={{ color: 'red', display : 'block'}}>{formik.errors.title}</small>
                    ) :null
                
                    
                }

                <label for="content">Content</label>
                <textarea type="text" id="content" name="content" onChange={formik.handleChange} value={formik.values.content} placeholder=""></textarea>
                {
                    formik.errors.content ? (
                        <small style={{ color: 'red', display : 'block'}}>{formik.errors.content}</small>
                    ) :null
                
                    
                }
                <input type="submit" value={formik.isSubmitting ? 'Submitting...' : 'Submit'} disabled={formik.isSubmitting}/>
            </form>
        </>
    );
}