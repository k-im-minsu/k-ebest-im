const lib=require("k-lib-im");
/**
 * @typedef {Object} t1901 [주식] ETF - ETF현재가_시세조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1901_OutBlock} t1901OutBlock
 */
/**
 * @typedef {Object} t1901_OutBlock [주식] ETF - ETF현재가_시세조회 
 * @property {string} hname 한글명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {number} recprice 기준가(8)
 * @property {number} avg 가중평균(8)
 * @property {number} uplmtprice 상한가(8)
 * @property {number} dnlmtprice 하한가(8)
 * @property {number} jnilvolume 전일거래량(12)
 * @property {number} volumediff 거래량차(12)
 * @property {number} open 시가(8)
 * @property {string} opentime 시가시간(6)
 * @property {number} high 고가(8)
 * @property {string} hightime 고가시간(6)
 * @property {number} low 저가(8)
 * @property {string} lowtime 저가시간(6)
 * @property {number} high52w 52최고가(8)
 * @property {string} high52wdate 52최고가일(8)
 * @property {number} low52w 52최저가(8)
 * @property {string} low52wdate 52최저가일(8)
 * @property {number} exhratio 소진율(6.2)
 * @property {number} flmtvol 외국인보유수량(12)
 * @property {number} per PER(6.2)
 * @property {number} listing 상장주식수(천)(12)
 * @property {number} jkrate 증거금율(8)
 * @property {number} vol 회전율(6.2)
 * @property {string} shcode 단축코드(6)
 * @property {number} value 누적거래대금(12)
 * @property {number} highyear 연중최고가(8)
 * @property {string} highyeardate 연중최고일자(8)
 * @property {number} lowyear 연중최저가(8)
 * @property {string} lowyeardate 연중최저일자(8)
 * @property {string} upname 업종명(20)
 * @property {string} upcode 업종코드(3)
 * @property {number} upprice 업종현재가(7.2)
 * @property {string} upsign 업종전일비구분(1)
 * @property {number} upchange 업종전일대비(6.2)
 * @property {number} updiff 업종등락율(6.2)
 * @property {string} futname 선물최근월물명(20)
 * @property {string} futcode 선물최근월물코드(8)
 * @property {number} futprice 선물현재가(6.2)
 * @property {string} futsign 선물전일비구분(1)
 * @property {number} futchange 선물전일대비(6.2)
 * @property {number} futdiff 선물등락율(6.2)
 * @property {number} nav NAV(8.2)
 * @property {string} navsign NAV전일대비구분(1)
 * @property {number} navchange NAV전일대비(8.2)
 * @property {number} navdiff NAV등락율(6.2)
 * @property {number} cocrate 추적오차율(6.2)
 * @property {number} kasis 괴리율(6.2)
 * @property {number} subprice 대용가(10)
 * @property {string} offerno1 매도증권사코드1(6)
 * @property {string} bidno1 매수증권사코드1(6)
 * @property {number} dvol1 총매도수량1(8)
 * @property {number} svol1 총매수수량1(8)
 * @property {number} dcha1 매도증감1(8)
 * @property {number} scha1 매수증감1(8)
 * @property {number} ddiff1 매도비율1(6.2)
 * @property {number} sdiff1 매수비율1(6.2)
 * @property {string} offerno2 매도증권사코드2(6)
 * @property {string} bidno2 매수증권사코드2(6)
 * @property {number} dvol2 총매도수량2(8)
 * @property {number} svol2 총매수수량2(8)
 * @property {number} dcha2 매도증감2(8)
 * @property {number} scha2 매수증감2(8)
 * @property {number} ddiff2 매도비율2(6.2)
 * @property {number} sdiff2 매수비율2(6.2)
 * @property {string} offerno3 매도증권사코드3(6)
 * @property {string} bidno3 매수증권사코드3(6)
 * @property {number} dvol3 총매도수량3(8)
 * @property {number} svol3 총매수수량3(8)
 * @property {number} dcha3 매도증감3(8)
 * @property {number} scha3 매수증감3(8)
 * @property {number} ddiff3 매도비율3(6.2)
 * @property {number} sdiff3 매수비율3(6.2)
 * @property {string} offerno4 매도증권사코드4(6)
 * @property {string} bidno4 매수증권사코드4(6)
 * @property {number} dvol4 총매도수량4(8)
 * @property {number} svol4 총매수수량4(8)
 * @property {number} dcha4 매도증감4(8)
 * @property {number} scha4 매수증감4(8)
 * @property {number} ddiff4 매도비율4(6.2)
 * @property {number} sdiff4 매수비율4(6.2)
 * @property {string} offerno5 매도증권사코드5(6)
 * @property {string} bidno5 매수증권사코드5(6)
 * @property {number} dvol5 총매도수량5(8)
 * @property {number} svol5 총매수수량5(8)
 * @property {number} dcha5 매도증감5(8)
 * @property {number} scha5 매수증감5(8)
 * @property {number} ddiff5 매도비율5(6.2)
 * @property {number} sdiff5 매수비율5(6.2)
 * @property {number} fwdvl 외국계매도합계수량(12)
 * @property {number} ftradmdcha 외국계매도직전대비(12)
 * @property {number} ftradmddiff 외국계매도비율(6.2)
 * @property {number} fwsvl 외국계매수합계수량(12)
 * @property {number} ftradmscha 외국계매수직전대비(12)
 * @property {number} ftradmsdiff 외국계매수비율(6.2)
 * @property {string} upname2 참고지수명(20)
 * @property {string} upcode2 참고지수코드(3)
 * @property {number} upprice2 참고지수현재가(7.2)
 * @property {number} jnilnav 전일NAV(8.2)
 * @property {string} jnilnavsign 전일NAV전일대비구분(1)
 * @property {number} jnilnavchange 전일NAV전일대비(8.2)
 * @property {number} jnilnavdiff 전일NAV등락율(6.2)
 * @property {number} etftotcap 순자산총액(억원)(12)
 * @property {number} spread 스프레드(6.2)
 * @property {number} leverage 레버리지(2)
 * @property {string} taxgubun 과세구분(1)
 * @property {string} opcom_nmk 운용사(20)
 * @property {string} lp_nm1 LP1(20)
 * @property {string} lp_nm2 LP2(20)
 * @property {string} lp_nm3 LP3(20)
 * @property {string} lp_nm4 LP4(20)
 * @property {string} lp_nm5 LP5(20)
 * @property {string} etf_cp 복제방법(10)
 * @property {string} etf_kind 상품유형(Filler)(10)
 * @property {string} vi_gubun VI발동해제(10)
 * @property {string} etn_kind_cd ETN상품분류(20)
 * @property {string} lastymd ETN만기일(8)
 * @property {string} payday ETN지급일(8)
 * @property {string} lastdate ETN최종거래일(8)
 * @property {string} issuernmk ETN발행시장참가자(20)
 * @property {string} last_sdate ETN만기상환가격결정시작일(8)
 * @property {string} last_edate ETN만기상환가격결정종료일(8)
 * @property {string} lp_holdvol ETNLP보유수량(12)
 * @property {string} listdate 상장일(8)
 * @property {string} etp_gb ETP상품구분코드(1)
 * @property {string} etn_elback_yn ETN조기상환가능여부(1)
 * @property {string} settletype 최종결제(2)
 * @property {string} idx_asset_class1 지수자산분류코드(대분류)(2)
 * @property {string} ty_text ETF/ETN투자유의(8)
 * @property {number} leverage2 추적수익률배수(6.2)
 */
/**
 * [주식] ETF - ETF현재가_시세조회 (초당 1건 제한)
 * @param {string} shcode 단축코드(6) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1901|null>}  실패시 null 반환
 */
module.exports = async(shcode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1901",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1901InBlock":{
        "shcode":shcode
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/etf",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}