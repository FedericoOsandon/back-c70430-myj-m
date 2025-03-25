

export const ProductCard = ({title, code, price}) => {
    return (
        <div style={{width: '20%'}}>
            <img style={{width: '100%', borderRadius: 20}} src='https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202310/03/00163610800441____4__1200x1200.jpg' alt='image-product'/>
            <div>
                <h3>{title}</h3>
                <p>Code: {code}</p>
                <p>Precio: {price}</p>
            </div>
            <button>Agregar al carrito</button>
        </div>
    )
}
