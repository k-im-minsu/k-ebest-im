const lib=require("k-lib-im");
/**
 * @typedef {Object} t1950 [주식] ELW - ELW현재가_시세조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1950_OutBlock} t1950OutBlock
 * @property {Array<t1950_OutBlock1>} t1950OutBlock1
 */
/**
 * @typedef {Object} t1950_OutBlock [주식] ELW - ELW현재가_시세조회 
 * @property {string} hname 한글명(40)
 * @property {string} chetime 체결시간(10)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} cvolume 체결량(10)
 * @property {number} volume 누적거래량(12)
 * @property {number} recprice 기준가(8)
 * @property {number} avg 가중평균(8)
 * @property {number} jnilvolume 전일거래량(12)
 * @property {number} jvolume 전일동시간거래량(12)
 * @property {number} jnilclose 전일종가(8)
 * @property {number} volumechg 거래량차(12)
 * @property {number} volumediff 거래량차등락율(6.2)
 * @property {number} open 시가(8)
 * @property {number} odiff 시가등락율(6.2)
 * @property {string} opentime 시가시간(6)
 * @property {number} high 고가(8)
 * @property {number} hdiff 고가등락율(6.2)
 * @property {string} hightime 고가시간(6)
 * @property {number} low 저가(8)
 * @property {number} ldiff 저가등락율(6.2)
 * @property {string} lowtime 저가시간(6)
 * @property {number} high52w 52최고가(8)
 * @property {number} high52wdiff 52최고가등락율(6.2)
 * @property {string} high52wdate 52최고가일(8)
 * @property {number} low52w 52최저가(8)
 * @property {number} low52wdiff 52최저가등락율(6.2)
 * @property {string} low52wdate 52최저가일(8)
 * @property {number} exhratio 소진율(6.2)
 * @property {number} listing 상장주식수(천)(12)
 * @property {string} memedan 수량단위(5)
 * @property {number} vol 회전율(6.2)
 * @property {number} parity 패리티(8.2)
 * @property {number} berate 손익분기(8.2)
 * @property {number} gearing 기어링(8.2)
 * @property {number} elwexec 행사가(8.2)
 * @property {number} issueprice 발행가(8)
 * @property {number} convrate 전환비율(12.4)
 * @property {string} lastdate 최종거래일(8)
 * @property {number} capt 자본지지(8.2)
 * @property {number} egearing e.기어링(8.2)
 * @property {number} premium 프리미엄(8.2)
 * @property {number} spread 스프레드(6.2)
 * @property {number} espread 최대스프레드(6.2)
 * @property {number} theoryprice 이론가(10.2)
 * @property {number} impv 내재변동성(6.2)
 * @property {string} moneyness 상태(1)
 * @property {number} delt 델타(8.6)
 * @property {number} gama 감마(8.6)
 * @property {number} vega 베가(13.6)
 * @property {number} ceta 쎄타(13.6)
 * @property {number} rhox 로(13.6)
 * @property {number} bjandatecnt 잔존일수(4)
 * @property {string} mmsdate 행사개시일(8)
 * @property {string} mmedate 행사종료일(8)
 * @property {string} payday 지급일(8)
 * @property {string} listdate 발행일(8)
 * @property {string} lpmem LP회원사(20)
 * @property {number} lp_holdvol LP보유수량(12)
 * @property {string} bcode 기초자산코드(6)
 * @property {string} bgubun 기초자산구분(1)
 * @property {number} bprice 기초자산현재가(8)
 * @property {string} bsign 기초자산전일비구분(1)
 * @property {number} bchange 기초자산전일비(8)
 * @property {number} bdiff 기초자산등락율(6.2)
 * @property {number} bvolume 기초자산거래량(12)
 * @property {string} info1 락구분(10)
 * @property {string} info2 관리/급등구분(10)
 * @property {string} info3 정지/연장구분(10)
 * @property {string} info4 투자/불성실구분(12)
 * @property {string} janginfo 장구분(10)
 * @property {string} basketgb 바스켓구분(1)
 * @property {number} basketcnt 바스켓갯수(3)
 * @property {string} elwtype ELW권리행사방식(2)
 * @property {string} settletype ELW결제방법(2)
 * @property {string} lpord LP사주문가능여부(2)
 * @property {string} elwdetail 권리내용(100)
 * @property {string} valuation 만기평가가격방식(100)
 */
/**
 * @typedef {Object} t1950_OutBlock1 [주식] ELW - ELW현재가_시세조회 
 * @property {string} bskcode 기초자산코드(6)
 * @property {number} bskbno 기초자산비율(3)
 * @property {number} bskprice 기초자산현재가(8)
 * @property {string} bsksign 기초자산전일비구분(1)
 * @property {number} bskchange 기초자산전일비(8)
 * @property {number} bskdiff 기초자산등락율(6.2)
 * @property {number} bskvolume 기초자산거래량(12)
 * @property {number} bskjnilclose 기초자산전일종가(8)
 */
/**
 * [주식] ELW - ELW현재가_시세조회 (초당 3건 제한)
 * @param {string} shcode ELW단축코드(6) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1950|null>}  실패시 null 반환
 */
module.exports = async(shcode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1950",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1950InBlock":{
        "shcode":shcode
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/elw",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}