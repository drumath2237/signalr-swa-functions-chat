import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.bindings.signalRMessages = [
    {
      target: "message",
      arguments: [req.body.message],
    },
  ];
  context.done();
};

export default httpTrigger;
