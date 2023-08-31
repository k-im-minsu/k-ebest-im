
/**
 * @typedef {Object} Ebest
 * @property {Sector} 업종
 * @property {Stock} 주식
 * @property {Etc} 기타
 */

//#region 업종
/**
 * @typedef {Object} Sector
 * @property {sector_price} 시세
 * @property {sector_chart} 차트
 * @property {sector_realtime} 실시간시세
 */
/**
 * @typedef {Object} sector_price
 * @property {import("./sector/price/t1514.js")} 업종기간별추이
 * @property {import("./sector/price/t8424.js")} 전체업종
 * @property {import("./sector/price/t1485.js")} 예상지수
 * @property {import("./sector/price/t1511.js")} 업종현재가
 * @property {import("./sector/price/t1516.js")} 업종별종목시세
*/
/**
 * @typedef {Object} sector_realtime
 * @property {import("./sector/realtime/BM_.js")} 업종별투자자별매매현황
*/
/**
 * @typedef {Object} sector_chart
 * @property {import("./sector/chart/t4203.js")} 업종챠트_종합
 * @property {import("./sector/chart/t8417.js")} 업종차트_틱_n틱
 * @property {import("./sector/chart/t8418.js")} 업종챠트_N분
 * @property {import("./sector/chart/t8419.js")} 업종챠트_일주월
*/
//#endregion

//#region 주식
/**
 * @typedef {Object} Stock
 * @property {stock_program} 프로그램
 * @property {stock_tradeinfo} 투자정보
 * @property {stock_investor} 투자자
 * @property {stock_chart} 차트
 * @property {stock_order} 주문
 * @property {stock_search} 종목검색
 * @property {stock_foreigner} 외인/기관
 * @property {stock_realtime} 실시간시세
 * @property {stock_price} 시세
 * @property {stock_sector} 섹터
 * @property {stock_high} 상위종목
 * @property {stock_other} 기타
 * @property {stock_account} 계좌
 * @property {stock_exchange} 거래원
 * @property {stock_etf} ETF
 * @property {stock_elw} ELW
 */
/**
 * @typedef {Object} stock_program
 * @property {import("./stock/program/t1631.js")} 프로그램매매종합조회
 * @property {import("./stock/program/t1632.js")} 시간대별프로그램매매추이
 * @property {import("./stock/program/t1633.js")} 기간별프로그램매매추이
 * @property {import("./stock/program/t1636.js")} 종목별프로그램매매동향
 * @property {import("./stock/program/t1637.js")} 종목별프로그램매매추이
 * @property {import("./stock/program/t1640.js")} 프로그램매매종합조회_미니
 * @property {import("./stock/program/t1662.js")} 시간대별프로그램매매추이_차트
*/
/**
 * @typedef {Object} stock_tradeinfo
 * @property {import("./stock/tradeinfo/t3102.js")} 뉴스본문
 * @property {import("./stock/tradeinfo/t3202.js")} 종목별증시일정
 * @property {import("./stock/tradeinfo/t3320.js")} FNG_요약
 * @property {import("./stock/tradeinfo/t3341.js")} 재무순위종합
 * @property {import("./stock/tradeinfo/t3401.js")} 투자의견
 * @property {import("./stock/tradeinfo/t3518.js")} 해외실시간지수
 * @property {import("./stock/tradeinfo/t3521.js")} 해외지수조회_API용
 * @property {import("./stock/tradeinfo/t8428.js")} 증시주변자금추이
*/
/**
 * @typedef {Object} stock_investor
 * @property {import("./stock/investor/t1601.js")} 투자자별종합
 * @property {import("./stock/investor/t1602.js")} 시간대별투자자매매추이
 * @property {import("./stock/investor/t1603.js")} 시간대별투자자매매추이상세
 * @property {import("./stock/investor/t1615.js")} 투자자매매종합1
 * @property {import("./stock/investor/t1617.js")} 투자자매매종합2
 * @property {import("./stock/investor/t1621.js")} 업종별분별투자자매매동향_챠트용
 * @property {import("./stock/investor/t1664.js")} 투자자매매종합_챠트
*/
/**
 * @typedef {Object} stock_chart
 * @property {import("./stock/chart/t1665.js")} 기간별투자자매매추이_챠트
 * @property {import("./stock/chart/t8410.js")} API전용주식챠트_일주월년
 * @property {import("./stock/chart/t8411.js")} 주식챠트_틱_n틱
 * @property {import("./stock/chart/t8412.js")} 주식챠트_N분
*/
/**
 * @typedef {Object} stock_order
 * @property {import("./stock/order/CSPAT00601.js")} 현물주문
 * @property {import("./stock/order/CSPAT00701.js")} 현물정정주문
 * @property {import("./stock/order/CSPAT00801.js")} 현물취소주문
*/
/**
 * @typedef {Object} stock_search
 * @property {import("./stock/search/t1809.js")} 신호조회
 * @property {import("./stock/search/t1825.js")} 종목Q클릭검색_씽큐스마트
 * @property {import("./stock/search/t1826.js")} 종목Q클릭검색리스트조회_씽큐스마트
*/
/**
 * @typedef {Object} stock_foreigner
 * @property {import("./stock/foreigner/t1702.js")} 외인기관종목별동향1
 * @property {import("./stock/foreigner/t1716.js")} 외인기관종목별동향2
 * @property {import("./stock/foreigner/t1717.js")} 외인기관종목별동향3
*/
/**
 * @typedef {Object} stock_realtime
 * @property {import("./stock/realtime/B7_.js")} ETF호가잔량
 * @property {import("./stock/realtime/DH1.js")} KOSPI시간외단일가호가잔량
 * @property {import("./stock/realtime/DHA.js")} KOSDAQ시간외단일가호가잔량
 * @property {import("./stock/realtime/DK3.js")} KOSDAQ시간외단일가체결
 * @property {import("./stock/realtime/DS3.js")} KOSPI시간외단일가체결
 * @property {import("./stock/realtime/DVI.js")} 시간외단일가VI발동해제
 * @property {import("./stock/realtime/H1_.js")} KOSPI호가잔량
 * @property {import("./stock/realtime/H2_.js")} KOSPI장전시간외호가잔량
 * @property {import("./stock/realtime/HA_.js")} KOSDAQ호가잔량
 * @property {import("./stock/realtime/HB_.js")} KOSDAQ장전시간외호가잔량
 * @property {import("./stock/realtime/I5_.js")} 코스피ETF종목실시간NAV
 * @property {import("./stock/realtime/IJ_.js")} 지수
 * @property {import("./stock/realtime/K1_.js")} KOSPI거래원
 * @property {import("./stock/realtime/K3_.js")} KOSDAQ체결
 * @property {import("./stock/realtime/KH_.js")} KOSDAQ프로그램매매종목별
 * @property {import("./stock/realtime/KM_.js")} KOSDAQ프로그램매매전체집계
 * @property {import("./stock/realtime/KS_.js")} KOSDAQ우선호가
 * @property {import("./stock/realtime/OK_.js")} KOSDAQ거래원
 * @property {import("./stock/realtime/PH_.js")} KOSPI프로그램매매종목별
 * @property {import("./stock/realtime/PM_.js")} KOSPI프로그램매매전체집계
 * @property {import("./stock/realtime/S2_.js")} KOSPI우선호가
 * @property {import("./stock/realtime/S3_.js")} KOSPI체결
 * @property {import("./stock/realtime/S4_.js")} KOSPI기세
 * @property {import("./stock/realtime/SC0.js")} 주식주문접수
 * @property {import("./stock/realtime/SC1.js")} 주식주문체결
 * @property {import("./stock/realtime/SC2.js")} 주식주문정정
 * @property {import("./stock/realtime/SC3.js")} 주식주문취소
 * @property {import("./stock/realtime/SC4.js")} 주식주문거부
 * @property {import("./stock/realtime/SHC.js")} 상_하한가근접진입
 * @property {import("./stock/realtime/SHD.js")} 상_하한가근접이탈
 * @property {import("./stock/realtime/SHI.js")} 상_하한가진입
 * @property {import("./stock/realtime/SHO.js")} 상_하한가이탈
 * @property {import("./stock/realtime/VI_.js")} VI발동해제
 * @property {import("./stock/realtime/YJ_.js")} 예상지수
 * @property {import("./stock/realtime/YK3.js")} KOSDAQ예상체결
 * @property {import("./stock/realtime/YS3.js")} KOSPI예상체결
 * @property {import("./stock/realtime/ESN.js")} 뉴ELW투자지표민감도
 * @property {import("./stock/realtime/h2_0.js")} ELW장전시간외호가잔량
 * @property {import("./stock/realtime/h3_.js")} ELW호가잔량
 * @property {import("./stock/realtime/k1_0.js")} ELW거래원
 * @property {import("./stock/realtime/s2_0.js")} ELW우선호가
 * @property {import("./stock/realtime/s3_0.js")} ELW체결
 * @property {import("./stock/realtime/s4_0.js")} ELW기세
 * @property {import("./stock/realtime/Ys30.js")} ELW예상체결
*/
/**
 * @typedef {Object} stock_price
 * @property {import("./stock/price/t1101.js")} 주식현재가호가조회
 * @property {import("./stock/price/t1102.js")} 주식현재가_시세조회
 * @property {import("./stock/price/t1104.js")} 주식현재가시세메모
 * @property {import("./stock/price/t1105.js")} 주식피봇_디마크조회
 * @property {import("./stock/price/t1109.js")} 시간외체결량
 * @property {import("./stock/price/t1301.js")} 주식시간대별체결조회
 * @property {import("./stock/price/t1302.js")} 주식분별주가조회
 * @property {import("./stock/price/t1305.js")} 기간별주가
 * @property {import("./stock/price/t1308.js")} 주식시간대별체결조회챠트
 * @property {import("./stock/price/t1310.js")} 주식당일전일분틱조회
 * @property {import("./stock/price/t1404.js")} 관리_불성실_투자유의조회
 * @property {import("./stock/price/t1405.js")} 투자경고_매매정지_정리매매조회
 * @property {import("./stock/price/t1410.js")} 초저유동성조회
 * @property {import("./stock/price/t1422.js")} 상_하한
 * @property {import("./stock/price/t1427.js")} 상_하한가직전
 * @property {import("./stock/price/t1442.js")} 신고_신저가
 * @property {import("./stock/price/t1449.js")} 가격대별매매비중조회
 * @property {import("./stock/price/t1471.js")} 시간대별호가잔량추이
 * @property {import("./stock/price/t1475.js")} 체결강도추이
 * @property {import("./stock/price/t1486.js")} 시간별예상체결가
 * @property {import("./stock/price/t1488.js")} 예상체결가등락율상위조회
 * @property {import("./stock/price/t8407.js")} API용주식멀티현재가조회
 * @property {import("./stock/price/t9945.js")} 주식마스터조회API용
*/
/**
 * @typedef {Object} stock_sector
 * @property {import("./stock/sector/t1531.js")} 테마별종목
 * @property {import("./stock/sector/t1532.js")} 종목별테마
 * @property {import("./stock/sector/t1533.js")} 특이테마
 * @property {import("./stock/sector/t1537.js")} 테마종목별시세조회
 * @property {import("./stock/sector/t8425.js")} 전체테마
*/
/**
 * @typedef {Object} stock_high
 * @property {import("./stock/high/t1441.js")} 등락율상위
 * @property {import("./stock/high/t1444.js")} 시가총액상위
 * @property {import("./stock/high/t1452.js")} 거래량상위
 * @property {import("./stock/high/t1463.js")} 거래대금상위
 * @property {import("./stock/high/t1466.js")} 전일동시간대비거래급증
 * @property {import("./stock/high/t1481.js")} 시간외등락율상위
 * @property {import("./stock/high/t1482.js")} 시간외거래량상위
 * @property {import("./stock/high/t1489.js")} 예상체결량상위조회
 * @property {import("./stock/high/t1492.js")} 단일가예상등락율상위
*/
/**
 * @typedef {Object} stock_other
 * @property {import("./stock/other/CLNAQ00100.js")} 예탁담보융자가능종목현황조회
 * @property {import("./stock/other/t1403.js")} 신규상장종목조회
 * @property {import("./stock/other/t1411.js")} 증거금율별종목조회
 * @property {import("./stock/other/t1638.js")} 종목별잔량_사전공시
 * @property {import("./stock/other/t1921.js")} 신용거래동향
 * @property {import("./stock/other/t1926.js")} 종목별신용정보
 * @property {import("./stock/other/t1927.js")} 공매도일별추이
 * @property {import("./stock/other/t1941.js")} 종목별대차거래일간추이
 * @property {import("./stock/other/t8430.js")} 주식종목조회
 * @property {import("./stock/other/t8436.js")} 주식종목조회_API용
*/
/**
 * @typedef {Object} stock_account
 * @property {import("./stock/account/CDPCQ04700.js")} 계좌_거래내역
 * @property {import("./stock/account/CSPAQ00600.js")} 계좌별신용한도조회
 * @property {import("./stock/account/CSPAQ12200.js")} 현물계좌예수금_주문가능금액_총평가_조회
 * @property {import("./stock/account/CSPAQ12300.js")} BEP단가조회
 * @property {import("./stock/account/CSPAQ13700.js")} 현물계좌_주문체결내역_조회_API
 * @property {import("./stock/account/CSPAQ22200.js")} 현물계좌예수금_주문가능금액_총평가2
 * @property {import("./stock/account/CSPBQ00200.js")} 현물계좌증거금률별주문가능수량조회
 * @property {import("./stock/account/FOCCQ33600.js")} 주식계좌_기간별수익률_상세
 * @property {import("./stock/account/t0150.js")} 주식당일매매일지_수수료
 * @property {import("./stock/account/t0151.js")} 주식당일매매일지_수수료_전일
 * @property {import("./stock/account/t0424.js")} 주식잔고2
 * @property {import("./stock/account/t0425.js")} 주식체결_미체결
*/
/**
 * @typedef {Object} stock_exchange
 * @property {import("./stock/exchange/t1752.js")} 종목별상위회원사
 * @property {import("./stock/exchange/t1764.js")} 회원사리스트
 * @property {import("./stock/exchange/t1771.js")} 종목별회원사추이
*/
/**
 * @typedef {Object} stock_etf
 * @property {import("./stock/etf/t1901.js")} ETF현재가_시세조회
 * @property {import("./stock/etf/t1902.js")} ETF시간별추이
 * @property {import("./stock/etf/t1903.js")} ETF일별추이
 * @property {import("./stock/etf/t1904.js")} ETF구성종목조회
 * @property {import("./stock/etf/t1906.js")} ETFLP호가
*/
/**
 * @typedef {Object} stock_elw
 * @property {import("./stock/elw/t1950.js")} ELW현재가_시세조회
 * @property {import("./stock/elw/t1951.js")} ELW시간대별체결조회
 * @property {import("./stock/elw/t1954.js")} ELW일별주가
 * @property {import("./stock/elw/t1956.js")} ELW현재가_확정지급액조회
 * @property {import("./stock/elw/t1958.js")} ELW종목비교
 * @property {import("./stock/elw/t1959.js")} LP대상종목정보조회
 * @property {import("./stock/elw/t1960.js")} ELW등락율상위
 * @property {import("./stock/elw/t1961.js")} ELW거래량상위
 * @property {import("./stock/elw/t1964.js")} ELW전광판
 * @property {import("./stock/elw/t1966.js")} ELW거래대금상위
 * @property {import("./stock/elw/t1969.js")} ELW지표검색
 * @property {import("./stock/elw/t1971.js")} ELW현재가호가조회
 * @property {import("./stock/elw/t1972.js")} ELW현재가_거래원조회
 * @property {import("./stock/elw/t1973.js")} ELW시간대별예상체결조회
 * @property {import("./stock/elw/t1974.js")} ELW기초자산동일종목
 * @property {import("./stock/elw/t1988.js")} 기초자산리스트조회
 * @property {import("./stock/elw/t8431.js")} ELW종목조회
 * @property {import("./stock/elw/t9905.js")} 기초자산리스트조회
 * @property {import("./stock/elw/t9907.js")} 만기월조회
 * @property {import("./stock/elw/t9942.js")} ELW마스터조회API용
*/
//#endregion

//#region 기타
/**
 * @typedef {Object} Etc
 * @property {etc_timesearch} 시간조회
 * @property {etc_realtime} 실시간시세
 */
/**
 * @typedef {Object} etc_timesearch
 * @property {import("./etc/timesearch/t0167.js")} 서버시간조회
*/
/**
 * @typedef {Object} etc_realtime
 * @property {import("./etc/realtime/JIF.js")} 장운영정보
 * @property {import("./etc/realtime/NWS.js")} 실시간뉴스제목패킷
*/
//#endregion

//#region export
/**
 * @param {string} appkey 고객 앱Key
 * @param {string} appsecretkey 	고객 앱 비밀Key
 * @param {boolean} ismoyee 모의투자 여부 (기본값 false)
 * @param {boolean} usesocket 실시간 사용 여부 (기본값 true)
 * @returns {Ebest}
*/
module.exports=function(appkey,appsecretkey,ismoyee=false,usesocket=true){
    require('./core.js')(appkey,appsecretkey,ismoyee,usesocket);
    this.업종=require('./sector/sector.js');
    this.주식=require('./stock/stock.js');
    this.기타=require('./etc/etc.js');
    return this;
};
//#endregion