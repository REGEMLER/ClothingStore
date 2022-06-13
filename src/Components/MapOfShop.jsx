import { YMaps, Map } from "react-yandex-maps";
import React from "react";

export const MapOfShop = () => {
    return(
        <YMaps>
        <div>
          <Map defaultState={{ center: [52.468959, 30.991667], zoom: 9 }} />
        </div>
      </YMaps>
    )
}