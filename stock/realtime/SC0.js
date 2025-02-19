/**
 * @typedef {Object} SC0 [주식] 실시간 시세 - 주식주문접수
 * @property {string} lineseq 라인일련번호 ex:"200000001"(10)
 * @property {string} accno Push키 ex:"20011132702"(11)
 * @property {string} user 	조작자ID ex:"hdkrggg4"(8)
 * @property {string} len 헤더길이 ex:"1053"(6)
 * @property {string} gubun 헤더구분 ex:"B"(1)
 * @property {string} compress  압축구분ex:"0"(1)
 * @property {string} encrypt 암호구분 ex:"0"(1)
 * @property {string} offset 공통시작지점 ex:"212"(3)
 * @property {string} trcode TRCODE ex:SONAT000:신규주문 SONAT001:정정주문 SONAT002:취소주문 SONAS100:체결확인(8)
 * @property {string} compid  이용사번호(3)
 * @property {string} userid 사용자ID ex:"hdkrggg4"(16)
 * @property {string} media 접속매체 ex:"HT"(2)
 * @property {string} ifid I/F일련번호 ex:"000"(3)
 * @property {string} seq 전문일련번호 ex:"000000154"(9)
 * @property {string} trid TR추적ID ex:"2000095635771500"(16)
 * @property {string} pubip 공인IP(12)
 * @property {string} prvip 사설IP(12)
 * @property {string} pcbpno 처리지점번호(3)
 * @property {string} bpno 지점번호(3)
 * @property {string} termno 단말번호(8)
 * @property {string} lang 언어구분(1)
 * @property {string} proctm AP처리시간(9)
 * @property {string} msgcode 메세지코드(4)
 * @property {string} outgu 메세지출력구분(1)
 * @property {string} compreq 압축요청구분(1)
 * @property {string} funckey 기능키(4)
 * @property {string} reqcnt 요청레코드개수(4)
 * @property {string} filler 예비영역(6)
 * @property {string} cont 연속구분(1)
 * @property {string} contkey 연속키값(18)
 * @property {string} varlen 가변시스템길이(2)
 * @property {string} varhdlen 가변해더길이(2)
 * @property {string} varmsglen 가변메시지길이(2)
 * @property {string} trsrc 조회발원지(1)
 * @property {string} eventid I/F이벤트ID(4)
 * @property {string} ifinfo I/F정보(4)
 * @property {string} filler1 예비영역(41)
 * @property {string} ordchegb 주문체결구분(2) 01:주문 02:정정 03:취소 11:체결 12:정정확인 13:취소확인 14:거부 A1:접수중 AC:접수완료
 * @property {string} marketgb 시장구분(2) 00:비상장 10:코스피 11:채권 19:장외시장 20:코스닥 23:코넥스 30:프리보드 61:동경거래소 62:JASDAQ
 * @property {string} ordgb 주문구분(2) 01:현금매도 02:현금매수 03:신용매도 04:신용매수 05:저축매도 06:저축매수 07:상품매도(대차) 09:상품매도 10:상품매수 11:선물대용매도(일반) 12:선물대용매도(반대) 13:현금매도(프) 14:현금매수(프) 15:현금매수(유가) 16:현금매수(정리) 17:상품매도(대차.프) 19:상품매도(프) 20:상품매수(프) 30:장외매매
 * @property {string} orgordno 원주문번호(10)
 * @property {string} accno1 계좌번호(11)
 * @property {string} accno2 계좌번호(9)
 * @property {string} passwd 비밀번호(8)
 * @property {string} expcode 종목번호(12)
 * @property {string} shtcode 단축종목번호(9)
 * @property {string} hname 종목명(40)
 * @property {string} ordqty 주문수량(16)
 * @property {string} ordprice 주문가격(13)
 * @property {string} hogagb 주문조건(1) 0:없음 1:IOC 2:FOK
 * @property {string} etfhogagb 호가유형코드(2) 00:지정가 03:시장가 05:조건부지정가 06:최유리지정가 07:최우선지정가 09:자사주 10:매입인도(일반) 13:시장가 (IOC) 16:최유리지정가 (IOC) 18:사용안함 20:지정가(임의) 23:시장가(임의) 26:최유리지정가 (FOK) 41:부분충족(프리보드) 42:전량충족(프리보드) 51:장중대량 52:장중바스켓 61:장개시전시간외 62:사용안함 63:경매매 66:장전시간외경쟁대량 67:장개시전시간외대량 68:장개시전시간외바스켓 69:장개시전시간외자사주 71:신고대량전장시가 72:사용안함 73:신고대량종가 76:장중경쟁대량 77:장중대량 78:장중바스켓 79:사용안함 80:매입인도(당일) 81:시간외종가 82:시간외단일가 87:시간외대량 88:바스켓주문 89:시간외자사주 91:자사주스톡옵션 A1:stop order
 * @property {string} pgmtype 프로그램호가구분(2) 00:일반 01:지수차익 02:지수비차익 03:주식차익 04:ETF차익(비차익제외) 05:ETF설정(비차익제외) 06:ETF차익(비차익) 07:ETF설정(비차익) 08:DR차익 09:ELW LP헷지 10:ETF LP헷지 11:주식옵션 LP헷지 12:장외파생상품헷지
 * @property {string} gmhogagb 공매도호가구분(1) 0:일반 1:차입주식매도 2:기타공매도
 * @property {string} gmhogayn 공매도가능여부(1) 0:일반 1:공매도
 * @property {string} singb 신용구분(3) 000:보통 001:유통융자신규 003:자기융자신규 005:유통대주신규 007:자기대주신규 011:미사용 070:매도대금담보융자신규 080:예탁주식담보융자신규 082:예탁채권담보융자신규 101:유통융자상환 103:자기융자상환 105:유통대주상환 107:자기대주상환 111:유통융자전액상환 113:자기융자전액상환 170:매도대금담보융자상환 180:예탁주식담보융자상환 182:예탁채권담보융자상환 188:담보대출전액상환 201:유통융자현금상환 203:자기융자현금상환 205:유통대주현물상환 207:자기대주현물상환 280:예탁주식담보융자현금상환 282:예탁채권담보융자현금상환 301:유통융자현금상환취소 303:자기융자현금상환취소 305:유통대주현물상환취소 307:자기대주현물상환취소
 * @property {string} loandt 대출일(8)* 
 * @property {string} cvrgordtp 반대매매주문구분(1) 	0:일반 1:자동반대매매 2:지점반대매매 3:예비주문에대한 본주문
 * @property {string} strtgcode 전략코드(6)
 * @property {string} groupid 그룹ID(20)
 * @property {string} ordseqno 주문회차(10)
 * @property {string} prtno 포트폴리오번호(10)
 * @property {string} basketno 바스켓번호(10)
 * @property {string} trchno 트렌치번호(10)
 * @property {string} itemno 아아템번호(10)
 * @property {string} brwmgmyn 차입구분(1)
 * @property {string} mbrno 회원사번호(3)
 * @property {string} procgb 처리구분(1)
 * @property {string} admbrchno 관리지점번호(3)
 * @property {string} futaccno 선물계좌번호(20)
 * @property {string} futmarketgb 선물상품구분(1)
 * @property {string} tongsingb 통신매체구분(2)
 * @property {string} lpgb 유동성공급자구분(1)
 * @property {string} dummy DUMMY(20)
 * @property {string} ordno 주문번호(10)
 * @property {string} ordtm 주문시각(9)
 * @property {string} prntordno 모주문번호(10)
 * @property {string} mgempno 관리사원번호(9)
 * @property {string} orgordundrqty 원주문미체결수량(16)
 * @property {string} orgordmdfyqty 원주문정정수량(16)
 * @property {string} ordordcancelqty 원주문취소수량(16)
 * @property {string} nmcpysndno 비회원사송신번호(10) 
 * @property {string} ordamt 주문금액(16)
 * @property {string} bnstp 매매구분(1)
 * @property {string} spareordno 예비주문번호(10)
 * @property {string} cvrgseqno 반대매매일련번호(10)
 * @property {string} rsvordno 예약주문번호(10)
 * @property {string} mtordseqno 복수주문일련번호(10)
 * @property {string} spareordqty 예비주문수량(16)
 * @property {string} orduserid 주문사원번호(16)
 * @property {string} spotordqty 실물주문수량(16)
 * @property {string} ordruseqty 재사용주문수량(16)
 * @property {string} mnyordamt 현금주문금액(16)
 * @property {string} ordsubstamt 주문대용금액(16)
 * @property {string} ruseordamt 재사용주문금액(16)
 * @property {string} ordcmsnamt 수수료주문금액(16)
 * @property {string} crdtuseamt 사용신용담보재사용금(16)
 * @property {string} secbalqty 잔고수량(16) 	실서버 데이터 미제공 필드
 * @property {string} spotordableqty 실물가능수량(16) 	실서버 데이터 미제공 필드
 * @property {string} ordableruseqty 재사용가능수량(매도)(16) 	실서버 데이터 미제공 필드
 * @property {string} flctqty 변동수량(16)
 * @property {string} secbalqtyd2 잔고수량(D2)(16) 	실서버 데이터 미제공 필드
 * @property {string} sellableqty 매도주문가능수량(16) 	실서버 데이터 미제공 필드
 * @property {string} unercsellordqty 미체결매도주문수량(16) 	실서버 데이터 미제공 필드
 * @property {string} avrpchsprc 평균매입가(13) 	실서버 데이터 미제공 필드
 * @property {string} pchsamt 매입금액(16) 	실서버 데이터 미제공 필드
 * @property {string} deposit 예수금(16)
 * @property {string} substamt 대용금(16)
 * @property {string} csgnmnymgn 위탁증거금현금(16)
 * @property {string} csgnsubstmgn 위탁증거금대용(16)
 * @property {string} crdtpldgruseamt 신용담보재사용금(16)
 * @property {string} ordablemny 주문가능현금(16)
 * @property {string} ordablesubstamt 주문가능대용(16)
 * @property {string} ruseableamt 재사용가능금액(16)
*/
/** @typedef {(data:SC0)=>void} SC0Func*/
/**
 * [주식] 실시간 시세 - 주식주문접수
 * @param {string} tr_key 단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 빈 문자열)
 * @param {SC0Func} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.등록 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("SC0",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - 주식주문접수 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.해제 = async(tr_key)=>{
    return await __ebestim.realdel("SC0",tr_key);
}
