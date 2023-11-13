'''
(c) 2023 helloworld3200 on GitHub - Licensed under MIT
reaction-times-tester is an open-source project to test your reaction times
for a school project.
'''

# This prepares the code by giving it the tools it needs, imagine getting
# the pen and pencil out of your pencil case - this is similar to that.
from pathlib import Path
from random import uniform
import time
import statistics
import os

# Test the time, and give back this value.
def test_time(waitTime: int = uniform(1.0, 5.0), inputMsg: str ="PRESS ENTER NOW") -> float:
    print("Beginning test, remember it waits for a random amount of time!\n")

    time.sleep(waitTime)

    startTime = time.time()
    input(inputMsg)
    endTime = time.time()
    passedTime = endTime-startTime

    print(f"Time passed (in seconds): {passedTime}")
    print(f"Time at start (in seconds): {startTime}")
    print(f"Time ended (in seconds): {endTime}")

    return passedTime

# Makes sure we are in the right folder.
def set_cwd_to_file_dir() -> None:
    abspath = os.path.abspath(__file__)
    dname = os.path.dirname(abspath)
    os.chdir(dname)

# Save the results to a file called "results.txt". We run this in the
# "main" part of the program. Not the main branch, the main part of the program.
def save_results_to_file(results: list[float], file_name: str) -> None:
    path = Path(file_name)

    # See if the file already exists or not.
    if path.is_file():
        file = open(file_name, "a")
    else:
        file = open(file_name, "x")

    # Write it to the file.
    results_str = [str(element)+"\n" for element in results]
    file.writelines(results_str)

    file.close()

# Where our program begins!
def main() -> None:
    # Prepare everything we need.
    print("Reaction Times Test by helloworld3200\n")
    ask_for_redo = "\nWould you like to test again? Y for yes, N for no: "
    file_name = "results.txt"
    current_time = time.ctime()
    test_results = []
    test_results_time = ["Test results logged at: "+current_time]

    # For however many times we want, test the reaction times.
    want_to_test = True
    while want_to_test:
        test_results.append(test_time())

        want_to_test = input(ask_for_redo).lower() == "y"

    # Find average test result.
    average_result = statistics.mean(test_results)
    print(f"Test finished, (mean) average result was {average_result}")
    print("\nSaving results...")

    # Save results to a file named "results.txt".
    test_results =  test_results_time + test_results
    test_results.append("\n")
    set_cwd_to_file_dir()
    save_results_to_file(test_results, file_name)

    print(f"Thank you for taking the test. Results are saved in the same folder as this program, under the file name {file_name}")

# This means "only do this if I am being started myself."
# This is more a good practice, and it isn't required so you don't
# need to understand it here.
if __name__ == "__main__":
    main()