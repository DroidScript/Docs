
module.exports.openai =
{
    OpenAI({ apiKey = "" }) {
        let n = 0;
        console.log("OpenAI " + apiKey);

        return {
            beta: {
                assistants: {
                    list: () => ({ data: [{ name: "Python Translator", id: "id1" }] })
                }, threads: {
                    messages: {
                        create: () => ({ id: "1", n: n = 0 }),
                        list: () => ({
                            data: [{
                                content: [{
                                    type: "text", text: { value: "Hello World" }
                                }]
                            }]
                        })
                    },
                    runs: {
                        retrieve: () => {
                            n++;
                            if (n < 3) return { status: "queued" };
                            if (n < 7) return { status: "in_progress" };
                            return { status: "completed" };
                        }
                    }
                }
            }
        };
    }
};
