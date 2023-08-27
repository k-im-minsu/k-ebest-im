const lib=require("k-lib-im");
/**
 * @typedef {Object} t0150 [주식] 계좌 - 주식당일매매일지_수수료
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t0150_OutBlock} t0150OutBlock
 * @property {Array<t0150_OutBlock1>} t0150OutBlock1
 */
/**
 * @typedef {Object} t0150_OutBlock [주식] 계좌 - 주식당일매매일지_수수료 
 * @property {number} mdqty 매도수량(9)
 * @property {number} mdamt 매도약정금액(18)
 * @property {number} mdfee 매도수수료(18)
 * @property {number} mdtax 매도거래세(18)
 * @property {number} mdargtax 매도농특세(18)
 * @property {number} tmdtax 매도제비용합(18)
 * @property {number} mdadjamt 매도정산금액(18)
 * @property {number} msqty 매수수량(9)
 * @property {number} msamt 매수약정금액(18)
 * @property {number} msfee 매수수수료(18)
 * @property {number} tmstax 매수제비용합(18)
 * @property {number} msadjamt 매수정산금액(18)
 * @property {number} tqty 합계수량(9)
 * @property {number} tamt 합계약정금액(18)
 * @property {number} tfee 합계수수료(18)
 * @property {number} tottax 합계거래세(18)
 * @property {number} targtax 합계농특세(18)
 * @property {number} ttax 합계제비용합(18)
 * @property {number} tadjamt 합계정산금액(18)
 * @property {string} cts_medosu CTS_매매구분(1)
 * @property {string} cts_expcode CTS_종목번호(12)
 * @property {string} cts_price CTS_단가(9)
 * @property {string} cts_middiv CTS_매체(2)
 */
/**
 * @typedef {Object} t0150_OutBlock1 [주식] 계좌 - 주식당일매매일지_수수료 
 * @property {string} medosu 매매구분(10)
 * @property {string} expcode 종목번호(12)
 * @property {number} qty 수량(9)
 * @property {number} price 단가(9)
 * @property {number} amt 약정금액(18)
 * @property {number} fee 수수료(18)
 * @property {number} tax 거래세(18)
 * @property {number} argtax 농특세(18)
 * @property {number} adjamt 정산금액(18)
 * @property {string} middiv 매체(20)
 */
/**
 * [주식] 계좌 - 주식당일매매일지_수수료 (초당 2건 제한)
 * @param {string} cts_medosu CTS_매매구분(1) - 연속조회시 OutBlock의 동일필드 입력
 * @param {string} cts_expcode CTS_종목번호(12) - 연속조회시 OutBlock의 동일필드 입력
 * @param {string} cts_price CTS_단가(9) - 연속조회시 OutBlock의 동일필드 입력
 * @param {string} cts_middiv CTS_매체(2) - 연속조회시 OutBlock의 동일필드 입력
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t0150|null>}  실패시 null 반환
 */
 exports.주식당일매매일지_수수료 = async(cts_medosu="",cts_expcode="",cts_price="",cts_middiv="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t0150",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t0150InBlock":{
        "cts_medosu":cts_medosu,
        "cts_expcode":cts_expcode,
        "cts_price":cts_price,
        "cts_middiv":cts_middiv
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/accno",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}