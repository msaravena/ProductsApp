import { useForm } from "react-hook-form"
import { useState, useEffect } from "react"
import PopUp from "./PopUp"
import "./PopUp.css"

const FormProduct = ( {createProductData, productSelectedData, updateProduct} ) => {

    const [ buttonPopUp, setButtonPopUp ] = useState(false)
    const { register, handleSubmit, formState: {errors}, reset } = useForm()

    const getFormData = data => {
        
        if(productSelectedData){   

            updateProduct(data)

        }else{ 

            createProductData(data)

            resetForm()        
    }

        setButtonPopUp(true)
    }

    useEffect( () => {
        if(productSelectedData !== null){
            
            reset(productSelectedData)            
        } else {
           
            resetForm()
        }
    }, [productSelectedData])

    const resetForm = () => {

        reset(
            {
                name: '',
                category: '',
                price: null,
                isAvailable: false               

            }
        )
    }

    return (
        <div>
            <form onSubmit={ handleSubmit(getFormData) }>
                <div className='input-wrapper'>
                    <label htmlFor="product-name">Nombre</label>
                    <input type='text'
                    id="product-name"
                    {...register("name", {
                        required : true
                    })}
                    
                    />
                    
                    { errors.name?.type === 'required' && <span role='alert'>Este input es requerido </span>}
                </div>
                <div className="input-wrapper">
                    <label htmlFor="product-category">Categoría</label>
                    <input type="text"
                    id='product-category'
                    {...register("category", {
                        required : true
                    })}
                    />
                </div>
                <div className='input-wrapper'>
                    <label htmlFor="product-price">Precio</label>
                    <input type="number"
                    id='product-price'
                    {...register('price',{
                        required : true
                    })}
                     />
                </div>
                
                <div className="toggle-input">
                    <label className="toggle" htmlFor="product-available">
                    <span className="toggle-label">Disponible</span>
                    <input className="toggle-checkbox" type="checkbox"
                    id='product-available'
                    {...register('isAvailable')} />
                    <div className="toggle-switch"></div>
                    </label>
                </div>                             
                
                <button type='submit'>Crear</button>
                
                <PopUp trigger={buttonPopUp} setTrigger = {setButtonPopUp}>
                    <h3>Producto creado con éxito!</h3>
                </PopUp>

            </form>
        </div>
    )
}

export default FormProduct