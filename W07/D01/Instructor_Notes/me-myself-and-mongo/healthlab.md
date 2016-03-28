### health lab

<<<<<<< HEAD
Please import the json file given with this command:
`mongoimport -d health -c violations -t json --jsonArray ./health.json`


=======
Please import the json file given with this command (in bash connsole!):
`mongoimport -d health -c violations --type json --jsonArray ./health.json`

- switch to database health, the collections are violations.
>>>>>>> 15facb7d706253a786da9ba14e23b981c59f443e
- find locations by their grade level
- find locations with "critical" flag
- find locations with the cuisine description "Hamburgers"
- Remove all locations that have a grade of "C"
- Update all locations with grade "A" to grade "C".
