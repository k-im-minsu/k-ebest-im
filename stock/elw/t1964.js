const lib=require("k-lib-im");
/**
 * @typedef {Object} t1964 [주식] ELW - ELW전광판
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {Array<t1964_OutBlock1>} t1964OutBlock1
 */
/**
 * @typedef {Object} t1964_OutBlock1 [주식] ELW - ELW전광판 
 * @property {string} shcode ELW코드(6)
 * @property {string} hname 종목명(40)
 * @property {string} item1 기초자산코드(6)
 * @property {string} itemnm 기초자산명(20)
 * @property {string} issuernmk 발행사(40)
 * @property {string} elwopt 콜풋구분(4)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 거래량(12)
 * @property {number} elwexec 행사가(10.2)
 * @property {number} jandatecnt 잔존일수(8)
 * @property {number} convrate 전환비율(8.4)
 * @property {string} lastdate 최종거래일(8)
 * @property {string} mmsdate 행사개시일(8)
 * @property {string} payday 지급일(8)
 * @property {number} listing 발행수량(8)
 * @property {string} atmgbnm 머니구분(10)
 * @property {number} parity 패리티(6.2)
 * @property {number} preminum 프리미엄(10.2)
 * @property {number} spread 스프래드(3.2)
 * @property {number} berate 손익분기율(6.2)
 * @property {number} capt 자본지지율(6.2)
 * @property {number} gearing 기어링(6.2)
 * @property {number} egearing e기어링(6.2)
 * @property {number} itemprice 기초자산현재가(8)
 * @property {string} itemsign 기초자산전일대비구분(1)
 * @property {number} itemchange 기초자산전일대비(8)
 * @property {number} itemdiff 기초자산등락율(6.2)
 * @property {number} itemvolume 기초자산거래량(12)
 * @property {number} jnilvolume 전일거래량(12)
 * @property {number} theoryprice 이론가(10.2)
 * @property {number} lp_rate LP보유비율(5.2)
 * @property {number} impv 내재변동성(6.2)
 * @property {number} delta 델타(10.6)
 * @property {number} theta 쎄타(10.6)
 */
/**
 * [주식] ELW - ELW전광판 (초당 2건 제한)
 * @param {string} item 기초자산코드(12) - 0:전체 basket:기초자산이 BASKET 종목 종목코드(12자리 표준코드)
 * @param {string} issuercd 발행사(12) - 000000000000:전체 발행사코드(3자리) 002 신한금융투자 033 JP모간 004 대신 005 대우 048 SG 030 삼성 006 신영 012 우리투자증권 003 한국 017 현대 049 미래에셋 035 맥쿼리 024 동양 031 동부 056 하나대투 054 노무라 034 KB 투자 067 BNP 파리바
 * @param {string} lastmonth 만기월물(6) - 전체#000000
 * @param {string} elwopt 콜풋구분(1) - 전체#0 콜#1 풋#2
 * @param {string} atmgubun 머니구분(1) - 전체#0 ATM#1 ITM#2 OTM#3
 * @param {string} elwtype 권리행사방식(2) - 권리전체#00 유럽형#01 미국형#02
 * @param {string} settletype 결제방법(2) - 결제방법전체#00 현금결제#01 실물결제#02
 * @param {string} elwexecgubun 행사기초자산구분(1) - 행사가/기초자산가격 검색 적용 여부(1이면 적용)
 * @param {string} fromrat 시작비율(5) - 행사가/기초자산가격 * 100 >= fromrat
 * @param {string} torat 종료비율(5) - 행사가/기초자산가격 * 100 <= torat
 * @param {string} volume 거래량(12) - 거래량 >= volume
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1964|null>}  실패시 null 반환
 */
module.exports = async(item="",issuercd="",lastmonth="",elwopt="",atmgubun="",elwtype="",settletype="",elwexecgubun="",fromrat="",torat="",volume="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1964",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1964InBlock":{
        "item":item,
        "issuercd":issuercd,
        "lastmonth":lastmonth,
        "elwopt":elwopt,
        "atmgubun":atmgubun,
        "elwtype":elwtype,
        "settletype":settletype,
        "elwexecgubun":elwexecgubun,
        "fromrat":fromrat,
        "torat":torat,
        "volume":volume
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/elw",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}