### health lab

Please import the json file given with this command (in bash connsole!):
`mongoimport -d health -c violations --type json --jsonArray ./health.json`

- switch to database health
- find locations by their grade level
- find locations with "critical" flag
- find locations with the cuisine description "Hamburgers"
- Remove all locations that have a grade of "C"
- Update all locations with grade "A" to grade "C".
