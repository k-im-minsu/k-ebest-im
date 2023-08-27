const lib=require("k-lib-im");
/**
 * @typedef {Object} t1511 [업종] 시세 - 업종현재가
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1511_OutBlock} t1511OutBlock
 */
/**
 * @typedef {Object} t1511_OutBlock [업종] 시세 - 업종현재가 
 * @property {string} gubun 업종구분(1)
 * @property {string} hname 업종명(20)
 * @property {number} pricejisu 현재지수(7.2)
 * @property {number} jniljisu 전일지수(7.2)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(7.2)
 * @property {number} diffjisu 지수등락율(6.2)
 * @property {number} jnilvolume 전일거래량(12)
 * @property {number} volume 당일거래량(12)
 * @property {number} volumechange 거래량전일대비(12)
 * @property {number} volumerate 거래량비율(6.2)
 * @property {number} jnilvalue 전일거래대금(12)
 * @property {number} value 당일거래대금(12)
 * @property {number} valuechange 거래대금전일대비(12)
 * @property {number} valuerate 거래대금비율(6.2)
 * @property {number} openjisu 시가지수(7.2)
 * @property {number} opendiff 시가등락율(6.2)
 * @property {string} opentime 시가시간(6)
 * @property {number} highjisu 고가지수(7.2)
 * @property {number} highdiff 고가등락율(6.2)
 * @property {string} hightime 고가시간(6)
 * @property {number} lowjisu 저가지수(7.2)
 * @property {number} lowdiff 저가등락율(6.2)
 * @property {string} lowtime 저가시간(6)
 * @property {number} whjisu 52주최고지수(7.2)
 * @property {number} whchange 52주최고현재가대비(7.2)
 * @property {string} whjday 52주최고지수일자(8)
 * @property {number} wljisu 52주최저지수(7.2)
 * @property {number} wlchange 52주최저현재가대비(7.2)
 * @property {string} wljday 52주최저지수일자(8)
 * @property {number} yhjisu 연중최고지수(7.2)
 * @property {number} yhchange 연중최고현재가대비(7.2)
 * @property {string} yhjday 연중최고지수일자(8)
 * @property {number} yljisu 연중최저지수(7.2)
 * @property {number} ylchange 연중최저현재가대비(7.2)
 * @property {string} yljday 연중최저지수일자(8)
 * @property {string} firstjcode 첫번째지수코드(3)
 * @property {string} firstjname 첫번째지수명(20)
 * @property {number} firstjisu 첫번째지수(7.2)
 * @property {string} firsign 첫번째대비구분(1)
 * @property {number} firchange 첫번째전일대비(7.2)
 * @property {number} firdiff 첫번째등락율(6.2)
 * @property {string} secondjcode 두번째지수코드(3)
 * @property {string} secondjname 두번째지수명(20)
 * @property {number} secondjisu 두번째지수(7.2)
 * @property {string} secsign 두번째대비구분(1)
 * @property {number} secchange 두번째전일대비(7.2)
 * @property {number} secdiff 두번째등락율(6.2)
 * @property {string} thirdjcode 세번째지수코드(3)
 * @property {string} thirdjname 세번째지수명(20)
 * @property {number} thirdjisu 세번째지수(7.2)
 * @property {string} thrsign 세번째대비구분(1)
 * @property {number} thrchange 세번째전일대비(7.2)
 * @property {number} thrdiff 세번째등락율(6.2)
 * @property {string} fourthjcode 네번째지수코드(3)
 * @property {string} fourthjname 네번째지수명(20)
 * @property {number} fourthjisu 네번째지수(7.2)
 * @property {string} forsign 네번째대비구분(1)
 * @property {number} forchange 네번째전일대비(7.2)
 * @property {number} fordiff 네번째등락율(6.2)
 * @property {number} highjo 상승종목수(4)
 * @property {number} upjo 상한종목수(4)
 * @property {number} unchgjo 보합종목수(4)
 * @property {number} lowjo 하락종목수(4)
 * @property {number} downjo 하한종목수(4)
 */
/**
 * [업종] 시세 - 업종현재가 (초당 3건 제한)
 * @param {string} upcode 업종코드(3) - 코스피#001 코스피200#101 KRX100#501 코스닥#301
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1511|null>}  실패시 null 반환
 */
 exports.업종현재가 = async(upcode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1511",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1511InBlock":{
        "upcode":upcode
       }
    }
  const result= await lib.http.post(__ebestim.url+"/indtp/market-data",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}