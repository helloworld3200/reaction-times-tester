from pathlib import Path
import random
import time
import statistics
import os

def test_time(waitTime: int = random.randint(1000, 10000), inputMsg: str ="PRESS ENTER NOW") -> float:
    print("Beginning test, remember it waits for a random amount of time!\n")

    time.sleep(waitTime)

    startTime = time.time()
    input(inputMsg)
    endTime = time.time()
    passedTime = startTime-endTime

    print(f"Time passed (in seconds): {passedTime}")
    print(f"Time at start (in seconds): {startTime}")
    print(f"Time ended (in seconds): {endTime}")

    return passedTime

def set_cwd_to_file_dir() -> None:
    abspath = os.path.abspath(__file__)
    dname = os.path.dirname(abspath)
    os.chdir(dname)

def save_results_to_file(results: list[float], file_name: str) -> None:
    path = Path(file_name)

    if path.is_file():
        file = open(file_name, "a")
    else:
        file = open(file_name, "x")

    current_time = time.ctime()

    file.close()

def main() -> None:
    print("Reaction Times Test by helloworld3200\n")
    ask_for_redo = "\nWould you like to test again? Y for yes, N for no: "
    test_results = []
    file_name = "results.txt"

    want_to_test = True
    while want_to_test:
        test_results.append(test_time())

        want_to_test = input(ask_for_redo).lower() == "y"

    average_result = statistics.mean(test_results)
    print(f"Test finished, (mean) average result was {average_result}")
    print("\nSaving results...")
    set_cwd_to_file_dir()
    save_results_to_file(test_results, file_name)

    print(f"Thank you for taking the test. Results are saved in the same folder as this program, under the file name {file_name}")

if __name__ == "__main__":
    main()