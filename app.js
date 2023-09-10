const express = require('express');
const app = express();
const port = 3000;

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get('/api/', (req, res) => {
	const {slack_name, track} = req.query;

	if(!slack_name || !track) {
		return res.status(400).json({ error: 'Two parameters slack_name and track are required' });
	}

	res.json({
			"slack_name": slack_name,
			"current_day": days[new Date().getDay()],
			"utc_time": new Date().toISOString().replace(/\.\d+/, ''),
			"track": track,
			"github_file_url": "https://github.com/collinskasyoki/hngx1/blob/main/app.js",
			"github_repo_url": "https://github.com/collinskasyoki/hngx1",
			"status_code": 200
	});

});

app.listen(port, () => {
	console.log(`Server is listening on port ${port}`);
});
