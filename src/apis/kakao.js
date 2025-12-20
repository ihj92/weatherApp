import axios from "axios"

const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY

const kakaoHttp = axios.create({
  baseURL: 'https://dapi.kakao.com',
  timeout: 10000,
  headers: {
    Authorization: `KakaoAK ${KAKAO_API_KEY}`,
  }
})

export const kakaoApi = {
  getAddressByCoords(lat, lon) {
    return kakaoHttp.get('/v2/local/geo/coord2regioncode.json', {
      params: {
        x: lon,
        y: lat,
      },
    })
  }
}