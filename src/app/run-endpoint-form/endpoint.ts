import { HttpClient } from '@angular/common/http';

export class Endpoint {

	constructor(
		public path: string,
		public method: string,
		public body: string,
		public baseURL: string,
		public response: string
	) {  

	}

}