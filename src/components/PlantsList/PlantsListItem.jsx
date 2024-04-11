
const PlantsListItem = ({title, imageUrl}) => {
    return (
        <div className="h-96 w-1/4 max-h-96 rounded-md hover:shadow-xl flex-auto max-w-72">
            <div
                 className="h-full w-full bg-cover bg-center rounded-md" 
                 alt={title} 
                 style={{backgroundImage: `url('${imageUrl}')`}}
                 >
            </div>
                
            <h5>{title}</h5>
        </div>
    )
}

export default PlantsListItem;