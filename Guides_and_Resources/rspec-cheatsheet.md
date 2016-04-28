# RSpec Cheatsheet

- `gem install rspec`
- From root folder of project:
  - Create directories `lib` & `spec`
    - Lib: write your code here
    - Spec: write your tests here
- In general, will have one file for each class in your program.
  - `rspec --init`
    - this creates a `.rspec` file in the root dir & a `spec_helpers.rb` file in the `spec` dir
- Navigate to the root of your project & run `rspec` to run your tests
  - It knows to look for the `spec` dir


### Remember
- How to "load" a ruby file into RSpec
  - `pry`
  - `load './my_ruby.rb'`
