const lib=require("k-lib-im");
/**
 * @typedef {Object} t1971 [주식] ELW - ELW현재가호가조회
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1971_OutBlock} t1971OutBlock
 */
/**
 * @typedef {Object} t1971_OutBlock [주식] ELW - ELW현재가호가조회 
 * @property {string} hname 한글명(40)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 누적거래량(12)
 * @property {number} jnilclose 전일종가(8)
 * @property {number} offerho1 매도호가1(8)
 * @property {number} bidho1 매수호가1(8)
 * @property {number} offerrem1 매도호가수량1(12)
 * @property {number} lp_offerrem1 LP매도호가수량1(12)
 * @property {number} bidrem1 매수호가수량1(12)
 * @property {number} lp_bidrem1 LP매수호가수량1(12)
 * @property {number} preoffercha1 직전매도대비수량1(12)
 * @property {number} prebidcha1 직전매수대비수량1(12)
 * @property {number} offerho2 매도호가2(8)
 * @property {number} bidho2 매수호가2(8)
 * @property {number} offerrem2 매도호가수량2(12)
 * @property {number} lp_offerrem2 LP매도호가수량2(12)
 * @property {number} bidrem2 매수호가수량2(12)
 * @property {number} lp_bidrem2 LP매수호가수량2(12)
 * @property {number} preoffercha2 직전매도대비수량2(12)
 * @property {number} prebidcha2 직전매수대비수량2(12)
 * @property {number} offerho3 매도호가3(8)
 * @property {number} bidho3 매수호가3(8)
 * @property {number} offerrem3 매도호가수량3(12)
 * @property {number} lp_offerrem3 LP매도호가수량3(12)
 * @property {number} bidrem3 매수호가수량3(12)
 * @property {number} lp_bidrem3 LP매수호가수량3(12)
 * @property {number} preoffercha3 직전매도대비수량3(12)
 * @property {number} prebidcha3 직전매수대비수량3(12)
 * @property {number} offerho4 매도호가4(8)
 * @property {number} bidho4 매수호가4(8)
 * @property {number} offerrem4 매도호가수량4(12)
 * @property {number} lp_offerrem4 LP매도호가수량4(12)
 * @property {number} bidrem4 매수호가수량4(12)
 * @property {number} lp_bidrem4 LP매수호가수량4(12)
 * @property {number} preoffercha4 직전매도대비수량4(12)
 * @property {number} prebidcha4 직전매수대비수량4(12)
 * @property {number} offerho5 매도호가5(8)
 * @property {number} bidho5 매수호가5(8)
 * @property {number} offerrem5 매도호가수량5(12)
 * @property {number} lp_offerrem5 LP매도호가수량5(12)
 * @property {number} bidrem5 매수호가수량5(12)
 * @property {number} lp_bidrem5 LP매수호가수량5(12)
 * @property {number} preoffercha5 직전매도대비수량5(12)
 * @property {number} prebidcha5 직전매수대비수량5(12)
 * @property {number} offerho6 매도호가6(8)
 * @property {number} bidho6 매수호가6(8)
 * @property {number} offerrem6 매도호가수량6(12)
 * @property {number} lp_offerrem6 LP매도호가수량6(12)
 * @property {number} bidrem6 매수호가수량6(12)
 * @property {number} lp_bidrem6 LP매수호가수량6(12)
 * @property {number} preoffercha6 직전매도대비수량6(12)
 * @property {number} prebidcha6 직전매수대비수량6(12)
 * @property {number} offerho7 매도호가7(8)
 * @property {number} bidho7 매수호가7(8)
 * @property {number} offerrem7 매도호가수량7(12)
 * @property {number} lp_offerrem7 LP매도호가수량7(12)
 * @property {number} bidrem7 매수호가수량7(12)
 * @property {number} lp_bidrem7 LP매수호가수량7(12)
 * @property {number} preoffercha7 직전매도대비수량7(12)
 * @property {number} prebidcha7 직전매수대비수량7(12)
 * @property {number} offerho8 매도호가8(8)
 * @property {number} bidho8 매수호가8(8)
 * @property {number} offerrem8 매도호가수량8(12)
 * @property {number} lp_offerrem8 LP매도호가수량8(12)
 * @property {number} bidrem8 매수호가수량8(12)
 * @property {number} lp_bidrem8 LP매수호가수량8(12)
 * @property {number} preoffercha8 직전매도대비수량8(12)
 * @property {number} prebidcha8 직전매수대비수량8(12)
 * @property {number} offerho9 매도호가9(8)
 * @property {number} bidho9 매수호가9(8)
 * @property {number} offerrem9 매도호가수량9(12)
 * @property {number} lp_offerrem9 LP매도호가수량9(12)
 * @property {number} bidrem9 매수호가수량9(12)
 * @property {number} lp_bidrem9 LP매수호가수량9(12)
 * @property {number} preoffercha9 직전매도대비수량9(12)
 * @property {number} prebidcha9 직전매수대비수량9(12)
 * @property {number} offerho10 매도호가10(8)
 * @property {number} bidho10 매수호가10(8)
 * @property {number} offerrem10 매도호가수량10(12)
 * @property {number} lp_offerrem10 LP매도호가수량10(12)
 * @property {number} bidrem10 매수호가수량10(12)
 * @property {number} lp_bidrem10 LP매수호가수량10(12)
 * @property {number} preoffercha10 직전매도대비수량10(12)
 * @property {number} prebidcha10 직전매수대비수량10(12)
 * @property {number} offer 매도호가수량합(12)
 * @property {number} bid 매수호가수량합(12)
 * @property {number} preoffercha 직전매도대비수량합(12)
 * @property {number} prebidcha 직전매수대비수량합(12)
 * @property {string} hotime 수신시간(8)
 * @property {number} yeprice 예상체결가격(8)
 * @property {number} yevolume 예상체결수량(12)
 * @property {string} yesign 예상체결전일구분(1)
 * @property {number} yechange 예상체결전일대비(8)
 * @property {number} yediff 예상체결등락율(6.2)
 * @property {number} tmoffer 시간외매도잔량(12)
 * @property {number} tmbid 시간외매수잔량(12)
 * @property {string} ho_status 동시구분(1)
 * @property {number} open 시가(8)
 * @property {number} high 고가(8)
 * @property {number} low 저가(8)
 * @property {string} invidx ELW권리형태(1:표준2:디지털3:조기종료)(1) - 1:표준 2:디지털 3:조기종료
 * @property {number} koba_stdprc KO베리어(12.2)
 * @property {number} koba_acc_rt KO접근도(12.2)
 * @property {string} koba_yn KO발생여부(Y/N)(1) - Y:Yes N:No
 */
/**
 * [주식] ELW - ELW현재가호가조회 (초당 3건 제한)
 * @param {string} shcode 단축코드(6) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1971|null>}  실패시 null 반환
 */
 exports.ELW현재가호가조회 = async(shcode="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1971",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1971InBlock":{
        "shcode":shcode
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