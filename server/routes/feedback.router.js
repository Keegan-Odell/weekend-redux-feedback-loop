const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
	const feedback = req.body;
	console.log(feedback);
	const sqlText = `
  INSERT INTO "feedback"
  ("feeling", understanding, support, comments)
  VALUES
  ($1, $2, $3, $4)
  `;
	sqlValues = [
		feedback.feeling,
		feedback.understanding,
		feedback.support,
		feedback.comment,
	];

	pool
		.query(sqlText, sqlValues)
		.then((dbRes) => {
			res.sendStatus(201);
		})
		.catch((dbErr) => {
			console.log('error posting to DB', dbErr);
		});
});

module.exports = router;
