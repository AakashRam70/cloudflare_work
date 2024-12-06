export interface Env {

}

export default {
	async fetch(request: Request, env: Env,
		ctx: ExecutionContext) {
		console.log(request.body);
		console.log(request.method);

		if (request.method === "GET") {
			return Response.json({
				message: "you send get Req."
			});
		} else {
			return Response.json({
				message: "you send post Req."
			});
		}
	}
}
