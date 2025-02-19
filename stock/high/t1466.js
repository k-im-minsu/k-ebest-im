const lib=require("k-lib-im");
/**
 * @typedef {Object} t1466 [주식] 상위종목 - 전일동시간대비거래급증
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1466_OutBlock} t1466OutBlock
 * @property {Array<t1466_OutBlock1>} t1466OutBlock1
 */
/**
 * @typedef {Object} t1466_OutBlock [주식] 상위종목 - 전일동시간대비거래급증 
 * @property {string} hhmm 현재시분(5)
 * @property {number} idx IDX(4)
 */
/**
 * @typedef {Object} t1466_OutBlock1 [주식] 상위종목 - 전일동시간대비거래급증 
 * @property {string} shcode 종목코드(6)
 * @property {string} hname 종목명(20)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} stdvolume 전일거래량(12)
 * @property {number} volume 당일거래량(12)
 * @property {number} voldiff 거래급등율(8.2)
 * @property {number} open 시가(8)
 * @property {number} high 고가(8)
 * @property {number} low 저가(8)
 * @property {string} ex_shcode 거래소별단축코드(10)
 */
/**
 * [주식] 상위종목 - 전일동시간대비거래급증 (초당 1건 제한)
 * @param {string} gubun 구분(1) - 0 : 전체 1 : 코스피 2 : 코스닥
 * @param {string} type1 전일거래량(1) - 0#1주 이상 1#1만주 이상 2#5만주 이상 3#10만주 이상 4#20만주 이상 5#50만주 이상 6#100만주 이상
 * @param {string} type2 거래급등율(1) - 0#전체 1#2000%이하 2#1500%이하 3#1000%이하 4#500%이하 5#100%이하 6#50%이하
 * @param {number} jc_num 대상제외(12) - 대상제외값 (0x00000080)관리종목 => 000000000128 (0x00000100)시장경보 => 000000000256 (0x00000200)거래정지 => 000000000512 (0x00004000)우선주 => 000000016384 (0x00200000)증거금50 => 000008388608 (0x01000000)정리매매 => 000016777216 (0x04000000)투자유의 => 000067108864 (0x80000000)불성실공시 => -02147483648 두개 이상 제외시 해당 값을 합산한다 예)관리종목 + 시장경보 = 000000000128 + 000000000256 = 000000000384
 * @param {number} sprice 시작가격(8) - 현재가 >= sprice
 * @param {number} eprice 종료가격(8) - 현재가 <= eprice
 * @param {number} volume 거래량(12) - 거래량 >= volume
 * @param {number} idx IDX(4) - 처음 조회시는 Space 연속 조회시에 이전 조회한 OutBlock의 idx 값으로 설정
 * @param {number} jc_num2 대상제외2(12) - 기본 => 000000000000 상장지수펀드 => 000000000001 선박투자회사 => 000000000002 스펙 => 000000000004 ETN => 000000000008(0x00000008) 투자주의 => 000000000016(0x00000010) 투자위험 => 000000000032(0x00000020) 위험예고 => 000000000064(0x00000040) 담보불가 => 000000000128(0x00000080) 두개 이상 제외시 해당 값을 합산한다.
 * @param {string} exchgubun 거래소구분코드(1)
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1466|null>}  실패시 null 반환
 */
module.exports = async(gubun="",type1="",type2="",jc_num=0,sprice=0,eprice=0,volume=0,idx=0,jc_num2=0,exchgubun="K",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1466",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1466InBlock":{
        "gubun":gubun,
        "type1":type1,
        "type2":type2,
        "jc_num":jc_num,
        "sprice":sprice,
        "eprice":eprice,
        "volume":volume,
        "idx":idx,
        "jc_num2":jc_num2,
        "exchgubun":exchgubun
       }
    }
  const result= await lib.http.post(__ebestim.url+"/stock/high-item",header,body);
  if(result.status===200){
    global.__tr_cont=result.headers.get('tr_cont')
    global.__tr_cont_key=result.headers.get('tr_cont_key')
    return await result.json();
  }else{
    console.log(result.status+" - "+await result.text());
    return null;
  }
}