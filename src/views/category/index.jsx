import React from "react";
import {useParams, useSearchParams} from 'react-router-dom';

export const Category = () => {
    const {categoryId} = useParams();
    const [params] = useSearchParams();


    const isDiscount = params.get('discount');


    const checked = +isDiscount ? {checked: true} : {};

    return (
        <div>
            MANY CATEGORIES {categoryId}
            HERE!
            <input type="checkbox" {...checked}/>
        </div>
    );
}