const lib=require("k-lib-im");
/**
 * @typedef {Object} t1958 [주식] ELW - ELW종목비교
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1958_OutBlock} t1958OutBlock
 * @property {t1958_OutBlock1} t1958OutBlock1
 * @property {t1958_OutBlock2} t1958OutBlock2
 */
/**
 * @typedef {Object} t1958_OutBlock [주식] ELW - ELW종목비교 
 * @property {string} hname 종목명(40)
 * @property {string} item1 기초자산(12)
 * @property {string} issuernmk 발행사(40)
 * @property {string} elwopt 콜풋구분(2)
 * @property {string} elwtype 행사방식(2)
 * @property {string} settletype 결제방법(2)
 * @property {number} elwexec 행사가(8.2)
 * @property {number} convrate 전환비율(12.4)
 * @property {number} listing 발행수량(12)
 * @property {string} mmsdate 행사개시일(8)
 * @property {string} lastdate 최종거래일(8)
 * @property {number} nofdays 거래잔존일수(4)
 * @property {string} payday 지급일(8)
 * @property {number} parity 패리티(6.2)
 * @property {number} premium 프리미엄(6.2)
 * @property {number} berate 손익분기(6.2)
 * @property {number} capt 자본지지(6.2)
 * @property {number} gearing 기어링(6.2)
 * @property {number} egearing e.기어링(6.2)
 * @property {number} price 가격(8)
 * @property {number} volume 거래량(12)
 * @property {number} diff 등락율(6.2)
 */
/**
 * @typedef {Object} t1958_OutBlock1 [주식] ELW - ELW종목비교 
 * @property {string} hname 종목명(40)
 * @property {string} item1 기초자산(12)
 * @property {string} issuernmk 발행사(40)
 * @property {string} elwopt 콜풋구분(2)
 * @property {string} elwtype 행사방식(2)
 * @property {string} settletype 결제방법(2)
 * @property {number} elwexec 행사가(8.2)
 * @property {number} convrate 전환비율(12.4)
 * @property {number} listing 발행수량(12)
 * @property {string} mmsdate 행사개시일(8)
 * @property {string} lastdate 최종거래일(8)
 * @property {number} nofdays 거래잔존일수(4)
 * @property {string} payday 지급일(8)
 * @property {number} parity 패리티(6.2)
 * @property {number} premium 프리미엄(6.2)
 * @property {number} berate 손익분기(6.2)
 * @property {number} capt 자본지지(6.2)
 * @property {number} gearing 기어링(6.2)
 * @property {number} egearing e.기어링(6.2)
 * @property {number} price 가격(8)
 * @property {number} volume 거래량(12)
 * @property {number} diff 등락율(6.2)
 */
/**
 * @typedef {Object} t1958_OutBlock2 [주식] ELW - ELW종목비교 
 * @property {string} hnamecmp 종목명비교(6)
 * @property {string} item1cmp 기초자산비교(6)
 * @property {string} issuernmkcmp 발행사비교(6)
 * @property {string} elwoptcmp 콜풋구분비교(6)
 * @property {string} elwtypecmp 행사방식비교(6)
 * @property {string} settlecmp 결제방법비교(6)
 * @property {number} elwexeccmp 행사가비교(8.2)
 * @property {number} convcmp 전환비율비교(12.4)
 * @property {number} listingcmp 발행수량비교(12)
 * @property {string} mmsdatecmp 행사개시일비교(6)
 * @property {string} lastdatecmp 최종거래일비교(6)
 * @property {string} nofdayscmp 거래잔존일수비교(6)
 * @property {string} paydaycmp 지급일비교(6)
 * @property {number} paritycmp 패리티비교(6.2)
 * @property {number} premiumcmp 프리미엄비교(6.2)
 * @property {number} beratecmp 손익분기비교(6.2)
 * @property {number} captcmp 자본지지비교(6.2)
 * @property {number} gearingcmp 기어링비교(6.2)
 * @property {number} egearingcmp e.기어링비교(6.2)
 * @property {number} pricecmp 가격비교(8)
 * @property {number} volumecmp 거래량비교(12)
 * @property {number} diffcmp 등락율비교(6.2)
 */
/**
 * [주식] ELW - ELW종목비교 (초당 2건 제한)
 * @param {string} shcode1 종목코드1(6) - 
 * @param {string} shcode2 종목코드2(6) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1958|null>}  실패시 null 반환
 */
 exports.ELW종목비교 = async(shcode1="",shcode2="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1958",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1958InBlock":{
        "shcode1":shcode1,
        "shcode2":shcode2
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