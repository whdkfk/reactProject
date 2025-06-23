import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"
// 참고 https://apis.map.kakao.com/web/guide/
export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: process.env.KAKAOJSKEY || "147fed53f56f30f774b12c54f64172fb",
    libraries: ["clusterer", "drawing", "services"],
  })
}
