import { useEffect } from "react";

const { kakao } = window;

function Map({ data }) {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(data.gpsY, data.gpsX),
      level: 2,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    const markerPosition = new kakao.maps.LatLng(data.gpsY, data.gpsX);

    // 마커를 생성
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    var iwContent =
        `<div style="padding:14px;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;">` +
        `<div style="font-weight: 600; font-size:14px margin-bottom: 3px;">${data.place}</div>` +
        `</div>`,
      // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwPosition = new kakao.maps.LatLng(data.gpsY, data.gpsX), //인포윈도우 표시 위치입니다
      iwRemoveable = true;

    const infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
      removable: iwRemoveable,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
    infowindow.open(map, marker);
  });

  return (
    <div
      id="map"
      style={{ width: "400px", height: "350px", display: "block" }}
    ></div>
  );
}

export default Map;
