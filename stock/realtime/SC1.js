/**
 * @typedef {Object} SC1 [주식] 실시간 시세 - 주식주문체결
 * @property {string} grpId 그룹Id(20)
 * @property {string} trchno 트렌치번호(10)
 * @property {string} trtzxLevytp 거래세징수구분(1)
 * @property {string} ordtrxptncode 주문처리유형코드(4)
 * @property {string} acntnm 계좌명(40)
 * @property {string} trcode TRCODE(8)
 * @property {string} userid 사용자ID(16)
 * @property {string} agrgbrnno 집계지점번호(3)
 * @property {string} regmktcode 등록시장코드(2)
 * @property {string} len 헤더길이(6)
 * @property {string} opdrtnno 운용지시번호(12)
 * @property {string} orgordmdfyqty 원주문정정수량(16)
 * @property {string} avrpchsprc 평균매입가(13)
 * @property {string} exectime 체결시각(9)
 * @property {string} cont 연속구분(1)
 * @property {string} mnymgnrat 현금증거금률(7)
 * @property {string} mdfycnfqty 정정확인수량(16)
 * @property {string} orgordcancqty 원주문취소수량(16)
 * @property {string} compress 압축구분(1)
 * @property {string} execprc 체결가격(13)
 * @property {string} mdfycnfprc 정정확인가격(16)
 * @property {string} unercsellordqty 미체결매도주문수량(16)
 * @property {string} cmsnamtexecamt 수수료체결금액(16)
 * @property {string} ruseableamt 재사용가능금액(16)
 * @property {string} gubun 헤더구분(1)
 * @property {string} trid TR추적ID(16)
 * @property {string} flctqty 변동수량(16)
 * @property {string} execno 체결번호(10)
 * @property {string} lptp 유동성공급자구분(1)
 * @property {string} varmsglen 가변메시지길이(2)
 * @property {string} ordno 주문번호(10)
 * @property {string} futsmkttp 선물시장구분(1)
 * @property {string} crdtexecamt 신용체결금액(16)
 * @property {string} deposit 예수금(16)
 * @property {string} frgrunqno 외국인고유번호(6)
 * @property {string} crdayruseexecval 금일재사용체결금액(16)
 * @property {string} trsrc 조회발원지(1)
 * @property {string} ordacntno 주문계좌번호(20)
 * @property {string} reqcnt 요청레코드개수(4)
 * @property {string} shtnIsuno 단축종목번호(9)
 * @property {string} accno1 계좌번호(11)
 * @property {string} strtgcode 전략코드(6)
 * @property {string} ordseqno 주문회차(10)
 * @property {string} Isunm 종목명(40)
 * @property {string} ordablesubstamt 주문가능대용(16)
 * @property {string} encrypt 암호구분(1)
 * @property {string} Isuno 종목번호(12)
 * @property {string} accno2 계좌번호(9)
 * @property {string} contkey 연속키값(18)
 * @property {string} Loandt 대출일(8)
 * @property {string} seq 전문일련번호(9)
 * @property {string} lineseq 라인일련번호(10)
 * @property {string} varlen 가변시스템길이(2)
 * @property {string} orduserId 주문자Id(16)
 * @property {string} mgmtbrnno 관리지점번호(3)
 * @property {string} rjtqty 거부수량(16)
 * @property {string} ordprcptncode 호가유형코드(2) 00:지정가 03:시장가 05:조건부지정가 06:최유리지정가 07:최우선지정가 09:자사주 10:매입인도(일반) 13:시장가 (IOC) 16:최유리지정가 (IOC) 18:사용안함 20:지정가(임의) 23:시장가(임의) 26:최유리지정가 (FOK) 41:부분충족(프리보드) 42:전량충족(프리보드) 51:장중대량 52:장중바스켓 61:장개시전시간외 62:사용안함 63:경매매 66:장전시간외경쟁대량 67:장개시전시간외대량 68:장개시전시간외바스켓 69:장개시전시간외자사주 71:신고대량전장시가 72:사용안함 73:신고대량종가 76:장중경쟁대량 77:장중대량 78:장중바스켓 79:사용안함 80:매입인도(당일) 81:시간외종가 82:시간외단일가 87:시간외대량 88:바스켓주문 89:시간외자사주 91:자사주스톡옵션 A1:stop order
 * @property {string} stdIsuno 표준종목번호(12)
 * @property {string} pchsant 매입금액(16)
 * @property {string} filler 예비영역(6)
 * @property {string} secbalqty 잔고수량(16)
 * @property {string} ordxctptncode 주문체결유형코드(2)	01:주문 02:정정 03:취소 11:체결 12 정정확인 13 취소확인 14 거부
 * @property {string} canccnfqty 취소확인수량(16)
 * @property {string} ordablemny 주문가능현금(16)
 * @property {string} pubip 공인IP(12)
 * @property {string} prvip 사설IP(12)
 * @property {string} funckey 기능키(4)
 * @property {string} accno 계좌번호(11)
 * @property {string} compreq 압축요청구분(1)
 * @property {string} crdtpldgruseamt 신용담보재사용금(16)
 * @property {string} ordamt 주문금액(16)
 * @property {string} termno 단말번호(8)
 * @property {string} crdtpldgexecamt 신용담보체결금액(16)
 * @property {string} ordcndi 주문조건(1)
 * @property {string} rmndLoanamt 잔여대출금액(16)
 * @property {string} bpno 지점번호(3)
 * @property {string} substamt 대용금(16)
 * @property {string} mgempno 관리사원번호(9)
 * @property {string} csgnsubstmgn 위탁증거금대용(16)
 * @property {string} offset 공통시작지점(3)
 * @property {string} rcptexectime 거래소수신체결시각(9)
 * @property {string} sellableqty 매도주문가능수량(16)
 * @property {string} spotexecqty 실물체결수량(16)
 * @property {string} varhdlen 가변해더길이(2)
 * @property {string} substmgnrat 대용증거금률(9)
 * @property {string} ordavrexecprc 주문평균체결가격(13)
 * @property {string} itemno 아이템번호(10)
 * @property {string} mgntrncode 신용거래코드(3)[신규] 000 : 보통 001 : 유통융자신규 003 : 자기융자신규 005 : 유통대주신규 007 : 자기대주신규 080 : 예탁주식담보융자신규 082 : 예탁채권담보융자신규 [상환] 101 : 유통융자상환 103 : 자기융자상환 105 : 유통대주상환 107 : 자기대주상환 111 : 유통융자전액상환 113 : 자기융자전액상환 180 : 예탁주식담보융자상환 182 : 예탁채권담보융자상환 188 : 담보대출전액상환
 * @property {string} nsavtrdqty 비저축체결수량(16)
 * @property {string} ifinfo I/F정보(4)
 * @property {string} ordableruseqty 재사용가능수량(매도)(16)
 * @property {string} ptflno 포트폴리오번호(10)
 * @property {string} secbalqtyd2 잔고수량(d2)(16)
 * @property {string} brwmgmtYn 차입관리여부(1)
 * @property {string} eventid I/F이벤트ID(4)
 * @property {string} csgnmnymgn 위탁증거금현금(16)
 * @property {string} pcbpno 처리지점번호(3)
 * @property {string} orgordno 원주문번호(10)
 * @property {string} ifid I/F일련번호(3)
 * @property {string} media 접속매체(2)
 * @property {string} mtiordseqno 복수주문일련번호(10)
 * @property {string} filler1 예비영역(41)
 * @property {string} orgordunercqty 원주문미체결수량(16)
 * @property {string} mbrnmbrno 회원/비회원사번호(3)
 * @property {string} futsLnkbrnno 선물연계지점번호(3)
 * @property {string} commdacode 통신매체코드(2)
 * @property {string} stslexecqty 공매도체결수량(16)
 * @property {string} proctm AP처리시간(9)
 * @property {string} bfstdIsuno 전표준종목번호(12)
 * @property {string} futsLnkacntno 선물연계계좌번호(20)
 * @property {string} lang 언어구분(1)
 * @property {string} unercqty 미체결수량(주문)(16)
 * @property {string} execqty 체결수량(16)
 * @property {string} adduptp 수수료합산코드(2)
 * @property {string} bskno 바스켓번호(10)
 * @property {string} spotordableqty 실물가능수량(16)
 * @property {string} ubstexecamt 대용체결금액(16)
 * @property {string} cvrgordtp 반대매매주문구분(1) 0:일반 1:자동반대매매 2:지점반대매매 3:예비주문에대한 본주문
 * @property {string} ordqty 주문수량(16)
 * @property {string} mnyexecamt 현금체결금액(16)
 * @property {string} outgu 메세지출력구분(1)
 * @property {string} msgcode 메세지코드(4)
 * @property {string} ordtrdptncode 주문거래유형코드(2)
 * @property {string} ordmktcode 주문시장코드(2)
 * @property {string} ordptncode 주문유형코드(2)
 * @property {string} prdayruseexecval 전일재사용체결금액(16)
 * @property {string} comid COM ID(3)
 * @property {string} bnstp 매매구분(1)
 * @property {string} user 조작자ID(8)
 * @property {string} ordprc 주문가격(13) 
*/
/** @typedef {(data:SC1)=>void} SC1Func*/
/**
 * [주식] 실시간 시세 - 주식주문체결
 * @param {string} tr_key 단축코드 6자리 또는 8자리 (단건, 연속), (계좌등록/해제 일 경우 빈 문자열)
 * @param {SC1Func} recv 서버에서 데이터 받으면 해당 함수 호출
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.등록 = async(tr_key="",recv)=>{
    return await __ebestim.realadd("SC1",tr_key,recv);
}
/**
 * [주식] 실시간 시세 - 주식주문체결 실시간 등록 해제
 * @param {string} tr_key 실시간 등록시 입력했던 키값
 * @returns {Promise<boolean>}  실패, 성공 여부
 */
 exports.해제 = async(tr_key)=>{
    return await __ebestim.realdel("SC1",tr_key);
}
