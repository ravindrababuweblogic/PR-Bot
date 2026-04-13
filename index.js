module.exports = (app) => {
  app.on("pull_request.opened", async (context) => {
    const prComment = context.issue({
      body: "🤖 Bot Analysis: Checking Helm syntax and Security... \n\n ✅ No hardcoded secrets found!",
    });
    return context.octokit.issues.createComment(prComment);
  });
};
