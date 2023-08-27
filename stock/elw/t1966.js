const lib=require("k-lib-im");
/**
 * @typedef {Object} t1966 [주식] ELW - ELW거래대금상위
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1966_OutBlock} t1966OutBlock
 * @property {Array<t1966_OutBlock1>} t1966OutBlock1
 */
/**
 * @typedef {Object} t1966_OutBlock [주식] ELW - ELW거래대금상위 
 * @property {number} idx IDX(4) - 연속조회키 연속 조회시 이 값을 InBlock의 idx 필드에 넣어준다.
 */
/**
 * @typedef {Object} t1966_OutBlock1 [주식] ELW - ELW거래대금상위 
 * @property {string} hname 한글명(40)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1) - 1:상한 2:상승 3:보합 4:하한 5:하락
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} value 누적거래대금(12)
 * @property {number} jnilvalue 전일거래대금(12)
 * @property {number} elwexec 행사가(10.2)
 * @property {number} convrate 전환비율(12.4)
 * @property {string} lastdate 만기일(8)
 * @property {string} itemcode 기초자산종목코드(12)
 * @property {string} itemshcode 기초자산단축코드(9)
 * @property {string} itemname 기초자산종목명(20)
 * @property {string} itemprice 기초자산현재가(10)
 * @property {string} itemsign 기초자산대비구분(1) - 1:상한 2:상승 3:보합 4:하한 5:하락
 * @property {string} itemchange 기초자산전일대비(10)
 * @property {number} itemdiff 기초자산등락율(6.2)
 * @property {string} elwshcode ELW종목코드(6)
 */
/**
 * [주식] ELW - ELW거래대금상위 (초당 2건 제한)
 * @param {string} gubun 당일전일(0:당일1:전일)(1) - 0:당일 1:전일
 * @param {string} ggubun 권리유형구분(00:EX01:콜02:풋'':전체)(2) - #콜/풋/EX 01#콜 02#풋 00#EX
 * @param {string} itemcode 기초자산종목(12) - 기초자산 표준코드(12자리)
 * @param {string} lastdate 조회만기일(8) - YYYYMMDD
 * @param {string} exgubun 대상제외(6) - 1번째Byte > '0' : 결제제외 - 현금결제 2번째Byte > '0' : 결제제외 - 실물결제 3번재Byte > '0' : 권리행사방식- 유럽형 제외 4번째Byte > '0' : 권리행사방식- 미국형 제외 5번째Byte 1 : 비표준형 제외 2 : 표준형 제외 3 : 비표준형, 표준형 제외 4 : 디지털형 제외 5 : 비표준형, 디지털형 제외 6 : 표준형, 디지털형 제외 7 : 비표준형, 표준형 디지털형 제외 6번째Byte > '0' : Basket종목 제외
 * @param {number} sprice 시작가격(8) - 현재가 >= sprice
 * @param {number} eprice 종료가격(8) - 현재가 <= eprice
 * @param {number} volume 거래량(12) - 거래량 >= volume
 * @param {number} sjanday 잔존시작일수(8) - 잔존일수 >= sjanday
 * @param {number} ejanday 잔존종료일수(8) - 잔존일수 <= ejanday
 * @param {number} idx IDX(4) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 idx 값으로 설정
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1966|null>}  실패시 null 반환
 */
 exports.ELW거래대금상위 = async(gubun="",ggubun="",itemcode="",lastdate="",exgubun="",sprice=0,eprice=0,volume=0,sjanday=0,ejanday=0,idx=0,tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1966",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1966InBlock":{
        "gubun":gubun,
        "ggubun":ggubun,
        "itemcode":itemcode,
        "lastdate":lastdate,
        "exgubun":exgubun,
        "sprice":sprice,
        "eprice":eprice,
        "volume":volume,
        "sjanday":sjanday,
        "ejanday":ejanday,
        "idx":idx
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