/**
 * Expr JS
 * Version: 1.0
 * Author: Luis Arcia
 * (C)2019. Weblarc.com
 * MIT License
 */

'strict';

class EXPR {
	static celular( valor, country, tipo ) {
		var paises = this.paises()
		var exp_reg;

		if( Object.keys( paises ).find(key => paises ) === country ) {
			for (const x in paises) {
				if( paises[x] != undefined ) {
					switch( tipo ) {
						case 'celular':
							exp_reg = paises[x].celular;
							break;
						case 'fijo':
							exp_reg = paises[x].fijo
							break
						default:
							throw 'No se seleccionó el tipo de número';
					}

					return exp_reg.test( Number( valor ) );
				} else {
					throw 'País ingresado no se encuentra en la lista compatible';
				}
			}
		} else {
			throw 'País ingresado no se encuentra en la lista compatible';
		}
	}

	static imei( valor ) {
		const imei_regex = /^[0-9]{15}$/g;

		return imei_regex.test( valor );
	}

	static email( valor ) {
		const email_regex  = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

		return email_regex.test( valor );
	}

	static url( valor ) {
		const url_regex  = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gm;

		return url_regex.test( valor );
	}

	static paises() {
		return {
			PA: {
				celular: /^(6)[0-9]{7}$/,
				fijo: /^(2|3|4|5|7|8|9)[0-9]{6}$/
			}
		}
	}
}