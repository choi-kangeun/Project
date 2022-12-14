// IP, PORT Address
// FasiAPI를 먼저 로컬에서 띄워야함 밑에 주소는 FastAPI 로컬 주소 및 포트번호임
// AWS EC2에 올릴 경우 EC2 IP로 변경하면 됨
const ip = "127.0.0.1";
const port = "8888";

// API Address
// 대시보드
const dashboardAddress = "/GetAHUSetSupData";

// AHU 설비 리스트
const ahuInfosAddress = "/GetAHUInfos";

// AHU 설비 정보
const ahuInfoAddress = "/GetAHUInfo";

// AHU 구성 정보
const ahuConfiguration = "/GetAHUConfiguration";

// AHU 온도 트렌드
const ahuTempAddress = "/GetAHUData";

// 시간별 전력소비량
const hourPowerAddress = "/GetLpDataHourly";

// 일별 전력소비량
const dayPowerAddress = "/GetLpDataDaily";

// 시간별 전력 소비량
const AHU_TOTAL_POEWR = "/GetAhuTotalPowerHourly";

// 일별 전력 소비량
const AHU_DAILY_POWER = "/GetAhuTotalPowerDaily";

// 공조기 온도 트렌드
const AHU_TEMP = "/GetAhuTempData";

// 칠러 환수온도 정보
const CHILER_CWST = "/GetChillerCwstData";

// 보일러 파워 데이터
const BOILER_POWER = "/GetBoilerPowerData";

// 칠러 파워 데이터
const CHILER_POWER = "/GetChillerPowerData";

// 보일러 가스 데이터
const BOILER_GAS = "/GetBoilerGasData";

// 대시보드 공조기 데이터
const DASH_AHU = "/GetAhuNowTempData";

// 대시보드 보일러 데이터
const DASH_BOILER = "/GetBoilerTotalData";

// DB IP = 43.200.196.117
// user = root
// PW = 1234
// DB = project_real_final
