

export const Cards = (props) => {


    return (
        <>
        <div className="row">
            {
                props.search && props.search.map((item, index) => {
                    return (
                        <div className="col-sm-3">
                        <div className="card "   key={index}>
                            <img className="card-img-top" src={item.posterUrl} alt="..."></img>
                            <div className="card-body">
                                <h6 className="card-title">Name : {item.title}</h6>
                            
                            </div>
                        </div>
                        </div>
                    )
                })
            }
</div>
        </>

    )
}