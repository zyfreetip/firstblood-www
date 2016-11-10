import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import {WebSocketService } from './websocket.service';

const Etherscan_URL = 'wss://socket.etherscan.io/wshandler';


@Injectable()
export class EtherScanService {
	public messages: Subject<Message>;

	constructor(wsService: WebSocketService) {
		this.messages = wsService
			.connect(Etherscan_URL)

	}
}
