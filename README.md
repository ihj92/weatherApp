# 🌤️ Weather App (Vue 3)

현재 위치를 기반으로 **오늘 · 내일 · 모레 날씨**와  
**어제와 오늘의 기온 비교**를 제공하는 날씨 웹 애플리케이션입니다.

---

## 🔍 주요 기능

- 📍 **현재 위치 기반 날씨 조회**
  - 브라우저 Geolocation API 사용
- 🌡️ **오늘 / 내일 / 모레 날씨 정보**
  - 최고 기온 / 최저 기온
  - 날씨 상태 아이콘 표시
- 🔄 **어제 vs 오늘 기온 비교**
  - 평균 기온 기준 비교 문구 제공
- 🗺️ **현재 위치 주소 표시**
  - Kakao Local API (좌표 → 주소 변환)

---

## 🛠️ 사용 기술

### Frontend
- Vue 3 (Composition API)
- Vite
- JavaScript (ES6+)

### API
- WeatherAPI
  - Forecast API
  - History API
- Kakao Local API

### 기타
- Browser Geolocation API

---

## 📦 프로젝트 구조

```bash
src
 ┣ api
 ┃ ┣ weather.js
 ┃ ┗ kakao.js
#  변경 예정
#  ┣ components
#  ┃ ┣ DailyWeather.vue
#  ┃ ┗ HourlyWeather.vue
 ┣ utils
 ┃ ┗ weatherIcon.js
 ┣ pages
 ┃ ┗ Home.vue
 ┗ main.js
```
---

## 🧾 Commit Convention

본 프로젝트는 작업 목적을 명확히 하기 위해  
**Conventional Commits 스타일**을 기반으로 커밋 메시지를 작성합니다.


| 타입 | 설명 |
|---|---|
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `style` | 코드 스타일 수정 (포맷팅, 세미콜론 등) |
| `refactor` | 리팩토링 (기능 변경 없음) |
| `chore` | 설정, 빌드, 패키지 관리 |
| `docs` | 문서 수정 (README 등) |

---

