/**@typedef {import('./sector/_sector.js')} Sector*/
/**@typedef {import('./stock/_stock.js')} Stock*/
/**@typedef {import('./etc/_etc.js')} Etc*/

/**
 * @typedef {Object} Ebest
 * @property {Sector} 업종
 * @property {Stock} 주식
 * @property {Etc} 기타
 */
/**
 * @param {string} appkey 고객 앱Key
 * @param {string} appsecretkey 	고객 앱 비밀Key
 * @param {boolean} ismoyee 모의투자 여부 (기본값 false)
 * @param {boolean} usesocket 실시간 사용 여부 (기본값 true)
 * @returns {Ebest}
*/
module.exports=function(appkey,appsecretkey,ismoyee=false,usesocket=true){
    require('./core.js')(appkey,appsecretkey,ismoyee,usesocket);
    this.업종=require('./sector/_sector.js');
    this.주식=require('./stock/_stock.js');
    this.기타=require('./etc/_etc.js');
    return this;
};
