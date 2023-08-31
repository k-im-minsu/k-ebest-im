const lib=require("k-lib-im");
/**
 * @typedef {Object} t1665 [주식] 차트 - 기간별투자자매매추이_챠트
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1665_OutBlock} t1665OutBlock
 * @property {Array<t1665_OutBlock1>} t1665OutBlock1
 */
/**
 * @typedef {Object} t1665_OutBlock [주식] 차트 - 기간별투자자매매추이_챠트 
 * @property {string} mcode 시장코드(8)
 * @property {string} mname 시장명(20)
 */
/**
 * @typedef {Object} t1665_OutBlock1 [주식] 차트 - 기간별투자자매매추이_챠트 
 * @property {string} date 일자(8)
 * @property {number} sv_08 개인수량(12)
 * @property {number} sv_17 외인계수량(등록+미등록)(12)
 * @property {number} sv_18 기관계수량(12)
 * @property {number} sv_01 증권수량(12)
 * @property {number} sv_03 투신수량(12)
 * @property {number} sv_04 은행수량(12)
 * @property {number} sv_02 보험수량(12)
 * @property {number} sv_05 종금수량(12)
 * @property {number} sv_06 기금수량(12)
 * @property {number} sv_07 기타수량(12)
 * @property {number} sv_00 사모펀드수량(12)
 * @property {number} sv_09 등록외국인수량(12)
 * @property {number} sv_10 미등록외국인수량(12)
 * @property {number} sv_11 국가수량(12)
 * @property {number} sv_99 기타계수량(기타+국가)(12)
 * @property {number} sa_08 개인금액(12)
 * @property {number} sa_17 외인계금액(등록+미등록)(12)
 * @property {number} sa_18 기관계금액(12)
 * @property {number} sa_01 증권금액(12)
 * @property {number} sa_03 투신금액(12)
 * @property {number} sa_04 은행금액(12)
 * @property {number} sa_02 보험금액(12)
 * @property {number} sa_05 종금금액(12)
 * @property {number} sa_06 기금금액(12)
 * @property {number} sa_07 기타금액(12)
 * @property {number} sa_00 사모펀드금액(12)
 * @property {number} sa_09 등록외국인금액(12)
 * @property {number} sa_10 미등록외국인금액(12)
 * @property {number} sa_11 국가금액(12)
 * @property {number} sa_99 기타계금액(기타+국가)(12)
 * @property {number} jisu 시장지수(7.2)
 */
/**
 * [주식] 차트 - 기간별투자자매매추이_챠트 (초당 1건 제한)
 * @param {string} market 시장구분(1) - 1#코스피 2#KP200 3#코스닥 4#선물 5#풋옵션 6#콜옵션
 * @param {string} upcode 업종코드(3) - 
 * @param {string} gubun2 수치구분(1:수치2:누적)(1) - 
 * @param {string} gubun3 단위구분(1:일2:주3:월)(1) - 
 * @param {string} from_date 시작날짜(8) - 
 * @param {string} to_date 종료날짜(8) - 
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1665|null>}  실패시 null 반환
 */
module.exports = async(market="",upcode="",gubun2="",gubun3="",from_date="",to_date="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1665",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1665InBlock":{
        "market":market,
        "upcode":upcode,
        "gubun2":gubun2,
        "gubun3":gubun3,
        "from_date":from_date,
        "to_date":to_date
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/chart",header,body);
  if(result.status===200){
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}