import { Checkbox } from "@/components/ui/checkbox";
import useStepperStore from "@/data-store/stepper-store";
import { useEffect } from "react";

let checked: boolean = false;

export function TermsOfServiceBox() {
    const { progress, setProgress } = useStepperStore();
    const { check, setCheck } = useStepperStore();

    function getPlaceHolder() {
        if (check === true) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <>
            <div className='flex flex-row'>
                <Checkbox
                    onClick={() => {
                        checked = !checked;
                        setCheck(checked);
                        setProgress(checked ? progress + 25 : progress - 25);
                    }}
                    className='mx-4 mt-[5px]'
                />
                <label>
                    By checking the box, you are confirming that you have read
                    and agree to&nbsp;
                    {/* TODO: Replace this to link to a seperate page for Terms and Services */}
                    <a
                        href='https://www.google.com'
                        className='italic text-blue-500 underline'
                    >
                        <label>Tailspin&apos;s terms &amp; conditions.</label>
                    </a>
                </label>
            </div>
        </>
    );
}

export default TermsOfServiceBox;
