

const ProductsList = ({products, deleteProduct, selectProduct}) => {

    return (
        <ul>
            {
                products?.map( (productsElemet, index) => (

                    <li key={`product-${index}`} className="product-item">
                        <h4><span>Nombre:</span> {productsElemet.name}</h4>
                        <h4><span>Categoría:</span> {productsElemet.category}</h4>
                        <h4><span>Precio:</span> ${productsElemet.price}</h4>
                        <h4> {productsElemet.isAvailable ? <span style={{color: "#069A8E"}}>Disponible</span> : <span style={{color: "#F94C66"}}>No Disponible</span> } </h4>
                        

                        <button onClick={ () => deleteProduct(productsElemet.id)} className='btn-delete'><i className='bx bx-trash'></i>Eliminar</button>
                        <button onClick={ () => selectProduct(productsElemet)} className='btn-edit'><i className='bx bx-edit'></i>Editar</button>
                        
                    </li>
                ) )
            }
        </ul>
    )
}

export default ProductsList