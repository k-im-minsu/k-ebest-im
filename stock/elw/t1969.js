const lib=require("k-lib-im");
/**
 * @typedef {Object} t1969 [주식] ELW - ELW지표검색
 * @property {string} rsp_cd tr 코드
 * @property {string} rsp_msg tr 메세지
 * @property {t1969_OutBlock} t1969OutBlock
 * @property {Array<t1969_OutBlock1>} t1969OutBlock1
 */
/**
 * @typedef {Object} t1969_OutBlock [주식] ELW - ELW지표검색 
 * @property {number} cnt 종목갯수(4)
 */
/**
 * @typedef {Object} t1969_OutBlock1 [주식] ELW - ELW지표검색 
 * @property {string} hname 종목명(40)
 * @property {string} shcode 종목코드(6)
 * @property {string} issuernmk 발행사(40)
 * @property {string} itemcode 기초자산코드(12)
 * @property {string} cpgubun 콜/풋구분(2)
 * @property {number} price 현재가(8)
 * @property {string} sign 전일대비구분(1)
 * @property {number} change 전일대비(8)
 * @property {number} diff 등락율(6.2)
 * @property {number} volume 거래량(12)
 * @property {number} jnilvolume 전일거래량(12)
 * @property {number} elwexec 행사가(10.2)
 * @property {string} item 기초자산명(20)
 * @property {number} bprice 기초자산가(10.2)
 * @property {string} bsign 기초전일대비구분(1)
 * @property {number} bchange 기초전일대비(10.2)
 * @property {number} bdiff 기초등락율(6.2)
 * @property {number} premium 프리미엄(6.2)
 * @property {number} parity 패리티(6.2)
 * @property {number} berate 손익분기(6.2)
 * @property {number} capt 자본지지(6.2)
 * @property {number} egearing e.기어링(6.2)
 * @property {number} gearing 기어링(6.2)
 * @property {string} lastdate 최종거래일(8)
 * @property {number} delta 델타(10.6)
 * @property {number} theta 쎄타(10.6)
 * @property {string} lpname LP회원사(40)
 * @property {number} lphold LP보유율(6.2)
 * @property {number} bjandatecnt 잔존일수(4)
 * @property {number} convrate 전환비율(8.4)
 * @property {number} tickvalue 1틱환산(10.2)
 * @property {number} kasis 괴리율(6.2)
 */
/**
 * [주식] ELW - ELW지표검색 (초당 2건 제한)
 * @param {string} chkitem 기초자산chk구분(1) - 0:기초자산 검색 안함 1:기초자산 검색
 * @param {string} cbitem 기초자산코드(12) - 전체''#000000000000 basket:기초자산이 BASKET 종목 종목코드(12자리 표준코드)
 * @param {string} chkissuer 발행사chk구분(1) - 0:발행사 검색 안함 1:발행사 검색
 * @param {string} cbissuer 발행사(12) - 전체''#000000000000
 * @param {string} chkcallput 권리chk구분(1) - 0:권리구분 검색 안함 1:권리구분 검색
 * @param {string} cbcallput 권리(call:01.put:02)(2) - 전체#00 콜#01 풋#02 EX#03
 * @param {string} chkexec 행사가chk구분(1) - 0:행사가/기초자산 비교 검색 안함 1:행사가/기초자산 비교 검색
 * @param {string} cbexec 행사가(>=:1.<=:2)(1) - >=#1 <=#2
 * @param {string} chktype 행사방식chk구분(1) - 0:행사방식 검색 안함 1:행사방식 검색
 * @param {string} cbtype 행사방식(2) - 전체#00 유럽형#01 미국형#02 기타#03
 * @param {string} chksettle 결제방법chk구분(1) - 0:결제방법 검색 안함 1:결제방법 검색
 * @param {string} cbsettle 결제방법(2) - 전체#00 현금결제#01 실물결제#02 현금+실물#03
 * @param {string} chklast 만기chk구분(1) - 0:만기월 검색 안함 1:만기월 검색
 * @param {string} cblast 만기월별(6) - 전체#000000
 * @param {string} chkelwexec 행사가격chk구분(1) - 0:행사가 검색 안함 1:행사가 검색
 * @param {number} elwexecs 행사가이상(10.2) - 행사가 >= elwexecs
 * @param {number} elwexece 행사가이하(10.2) - 행사가 <= elwexece
 * @param {string} chkvolume 거래량chk구분(1) - 0:거래량 검색 안함 1:거래량 검색
 * @param {number} volumes 거래량이상(12) - 거래량 >= volumes
 * @param {number} volumee 거래량이하(12) - 거래량 <= volumee
 * @param {string} chkrate 등락율chk구분(1) - 0:등락율 검색 안함 1:등락율 검색
 * @param {number} rates 등락율이상(6.2) - 등락율 >= rates
 * @param {number} ratee 등락율이하(6.2) - 등락율 <= ratee
 * @param {string} chkpremium 프리미엄chk구분(1) - 0:프리미엄 검색 안함 1:프리미엄 검색
 * @param {number} premiums 프리미엄이상(6.2) - 프리미엄 >= premiums
 * @param {number} premiume 프리미엄이하(6.2) - 프리미엄 <= premiume
 * @param {string} chkparity 패리티chk구분(1) - 0:패리티 검색 안함 1:패리티 검색
 * @param {number} paritys 패리티이상(6.2) - 패리티 >= paritys
 * @param {number} paritye 패리티이하(6.2) - 패리티 <= paritye
 * @param {string} chkberate 손익분기chk구분(1) - 0:손익분기 검색 안함 1:손익분기 검색
 * @param {number} berates 손익분기이상(6.2) - 손익분기 >= berates
 * @param {number} beratee 손익분기이하(6.2) - 손익분기 <= beratee
 * @param {string} chkcapt 자본지지chk구분(1) - 0:자본지지 검색 안함 1:자본지지 검색
 * @param {number} capts 자본지지이상(6.2) - 자본지지 >= capts
 * @param {number} capte 자본지지이하(6.2) - 자본지지 <= capts
 * @param {string} chkegearing e.기어링chk구분(1) - 0:e.기어링 검색 안함 1:e.기어링 검색
 * @param {number} egearings e.기어링이상(6.2) - e.기어링 >= egearings
 * @param {number} egearinge e.기어링이하(6.2) - e.기어링 <= egearinge
 * @param {string} chkgearing 기어링chk구분(1) - 0:기어링 검색 안함 1:기어링 검색
 * @param {number} gearings 기어링이상(6.2) - 기어링 >= gearings
 * @param {number} gearinge 기어링이하(6.2) - 기어링 <= gearinge
 * @param {string} chkdelta 델타chk구분(1) - 0:델타 검색 안함 1:델타 검색
 * @param {number} deltas 델타이상(10.6) - 델타 >= deltas
 * @param {number} deltae 델타이하(10.6) - 델타 <= deltae
 * @param {string} chktheta 쎄타chk구분(1) - 0:쎄타 검색 안함 1:쎄타 검색
 * @param {number} thetas 쎄타이상(10.6) - 쎄타 >= thetas
 * @param {number} thetae 쎄타이하(10.6) - 쎄타 <= thetas
 * @param {string} chkduedate 최종거래일chk구분(1) - 0:최종거래일 검색 안함 1:최종거래일 검색
 * @param {string} duedates 최종거래일이상(8) - YYYYMMDD 형식 최종거래일 >= duedates
 * @param {string} duedatee 최종거래일이하(8) - YYYYMMDD 형식 최종거래일 <= duedatee
 * @param {string} onetickgubun LP갭1틱(1) - 
 * @param {string} lp_liquidity LP유동성공급(1) - 
 * @param {string} chklp_code LPchk구분(1) - 
 * @param {string} lp_code LP회원사코드(3) - 
 * @param {string} chkkoba 조기종료chk구분(1) - 
 * @param {string} cbkoba 조기종료(0:전체1:KOBA2:KOBA제외)(1) - 전체#0 조기종료만#1 조기종료제외#2
 * @param {string} tr_cont 연속 거래 여부 [Y,N]
 * @param {string} tr_cont_key 연속일 경우 그전에 내려온 연속키 값 올림
 * @param {string} mac_address 	법인인 경우 필수 세팅
 * @returns {Promise<t1969|null>}  실패시 null 반환
 */
module.exports = async(chkitem="",cbitem="",chkissuer="",cbissuer="",chkcallput="",cbcallput="",chkexec="",cbexec="",chktype="",cbtype="",chksettle="",cbsettle="",chklast="",cblast="",chkelwexec="",elwexecs=0,elwexece=0,chkvolume="",volumes=0,volumee=0,chkrate="",rates=0,ratee=0,chkpremium="",premiums=0,premiume=0,chkparity="",paritys=0,paritye=0,chkberate="",berates=0,beratee=0,chkcapt="",capts=0,capte=0,chkegearing="",egearings=0,egearinge=0,chkgearing="",gearings=0,gearinge=0,chkdelta="",deltas=0,deltae=0,chktheta="",thetas=0,thetae=0,chkduedate="",duedates="",duedatee="",onetickgubun="",lp_liquidity="",chklp_code="",lp_code="",chkkoba="",cbkoba="",tr_cont="N",tr_cont_key="",mac_address="")=>{
    const header={
        "content-type":"application/json; charset=UTF-8",
        "authorization":await __ebestim.get_token(),
        "tr_cd":"t1969",
        "tr_cont":tr_cont,
        "tr_cont_key":tr_cont_key,
        "mac_address":mac_address
    }
    const body={
    "t1969InBlock":{
        "chkitem":chkitem,
        "cbitem":cbitem,
        "chkissuer":chkissuer,
        "cbissuer":cbissuer,
        "chkcallput":chkcallput,
        "cbcallput":cbcallput,
        "chkexec":chkexec,
        "cbexec":cbexec,
        "chktype":chktype,
        "cbtype":cbtype,
        "chksettle":chksettle,
        "cbsettle":cbsettle,
        "chklast":chklast,
        "cblast":cblast,
        "chkelwexec":chkelwexec,
        "elwexecs":elwexecs,
        "elwexece":elwexece,
        "chkvolume":chkvolume,
        "volumes":volumes,
        "volumee":volumee,
        "chkrate":chkrate,
        "rates":rates,
        "ratee":ratee,
        "chkpremium":chkpremium,
        "premiums":premiums,
        "premiume":premiume,
        "chkparity":chkparity,
        "paritys":paritys,
        "paritye":paritye,
        "chkberate":chkberate,
        "berates":berates,
        "beratee":beratee,
        "chkcapt":chkcapt,
        "capts":capts,
        "capte":capte,
        "chkegearing":chkegearing,
        "egearings":egearings,
        "egearinge":egearinge,
        "chkgearing":chkgearing,
        "gearings":gearings,
        "gearinge":gearinge,
        "chkdelta":chkdelta,
        "deltas":deltas,
        "deltae":deltae,
        "chktheta":chktheta,
        "thetas":thetas,
        "thetae":thetae,
        "chkduedate":chkduedate,
        "duedates":duedates,
        "duedatee":duedatee,
        "onetickgubun":onetickgubun,
        "lp_liquidity":lp_liquidity,
        "chklp_code":chklp_code,
        "lp_code":lp_code,
        "chkkoba":chkkoba,
        "cbkoba":cbkoba
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