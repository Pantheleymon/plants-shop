import { useSelector, useDispatch } from "react-redux";
import { useHttp } from "../../hooks/http.hook.js";
import { useEffect } from "react";
import { fetchPlants, selectAll } from "../../slices/plants";

import store from "../../store/store";

import PlantsListItem from "./PlantsListItem";

const PlantsList = () => {

    const allPlants = selectAll(store.getState());
    const {plantsLoadingStatus} = useSelector(state => state.plants);
    const dispatch = useDispatch();
    const {request} = useHttp();

    useEffect(() => {
        dispatch(fetchPlants(request))
    }, [])

    if (plantsLoadingStatus === "loading") {
        return '<Spinner/>';
    } else if (plantsLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }

    const renderPlantsList = (arr) => {
        if (arr.length === 0) {
            return (
                <h5 className="text-center mt-5">Растений пока нет</h5>
            )
        }
        return arr[0].map(({id, common_name, default_image}) => {

            let imageUrl;

            if (default_image !== null) {
                imageUrl = default_image.original_url;
            } else {
                imageUrl = 'https://proprikol.ru/wp-content/uploads/2020/06/krasivye-kartinki-zakaty-58.jpg';
            }

            return (
                <PlantsListItem title={common_name} imageUrl={imageUrl} key={id}/>
            )
        })
    }

    const elements = renderPlantsList(allPlants);

    return (
        <div className="flex justify-center flex-wrap gap-10">
            {elements}


            {/* <div className="h-96 w-1/4 max-h-96 rounded-md hover:shadow-xl flex-auto max-w-72">
                <div
                    className="h-full w-full bg-cover bg-center rounded-md" 
                    alt='астение' 
                    style={{backgroundImage: `url('https://flowwill.ru/wp-content/uploads/e/5/8/e586f5960d490b4ab96256735bddaec8.jpeg')`}}
                    >
                </div>
                    
                <h5>Комнатное растение</h5>
            </div>
            <div className="h-96 w-1/4 max-h-96 rounded-md hover:shadow-xl flex-auto max-w-72">
                <div
                    className="h-full w-full bg-cover bg-center rounded-md" 
                    alt='астение' 
                    style={{backgroundImage: `url('https://flowwill.ru/wp-content/uploads/e/5/8/e586f5960d490b4ab96256735bddaec8.jpeg')`}}
                    >
                </div>
                    
                <h5>Комнатное растение</h5>
            </div>
            <div className="h-96 w-1/4 max-h-96 rounded-md hover:shadow-xl flex-auto max-w-72">
                <div
                    className="h-full w-full bg-cover bg-center rounded-md" 
                    alt='астение' 
                    style={{backgroundImage: `url('https://flowwill.ru/wp-content/uploads/e/5/8/e586f5960d490b4ab96256735bddaec8.jpeg')`}}
                    >
                </div>
                    
                <h5>Комнатное растение</h5>
            </div>
            <div className="h-96 w-1/4 max-h-96 rounded-md hover:shadow-xl flex-auto max-w-72">
                <div
                    className="h-full w-full bg-cover bg-center rounded-md" 
                    alt='астение' 
                    style={{backgroundImage: `url('https://flowwill.ru/wp-content/uploads/e/5/8/e586f5960d490b4ab96256735bddaec8.jpeg')`}}
                    >
                </div>
                    
                <h5>Комнатное растение</h5>
            </div>
            <div className="h-96 w-1/4 max-h-96 rounded-md hover:shadow-xl flex-auto max-w-72">
                <div
                    className="h-full w-full bg-cover bg-center rounded-md" 
                    alt='астение' 
                    style={{backgroundImage: `url('https://flowwill.ru/wp-content/uploads/e/5/8/e586f5960d490b4ab96256735bddaec8.jpeg')`}}
                    >
                </div>
                    
                <h5>Комнатное растение</h5>
            </div> */}
        </div>
    );
};

export default PlantsList;