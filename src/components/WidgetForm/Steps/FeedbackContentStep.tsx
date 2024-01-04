import { CloseButton } from "../../CloseButton"
import { FeedbackType, feedbackTypes } from ".."
import { ArrowLeft } from "phosphor-react"


interface FeedbackContentStepProps {
    feedbackType:  FeedbackType;
    onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
    feedbackType, 
    onFeedbackRestartRequested
}: FeedbackContentStepProps) {

    const feedbackTypeInfo = feedbackTypes[feedbackType]

    return (
        <>
            <header className="flex items-center">
                <button 
                    type="button" 
                    className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
                    onClick={onFeedbackRestartRequested}
                >
                    <ArrowLeft weight="bold" className="w-4 h-4" />
                </button>

                <span className="text-xl leading-6 flex items-center gap-2"  >
                    <img 
                    src={feedbackTypeInfo.image.source} 
                    alt={feedbackTypeInfo.image.alt} />
                    {feedbackTypeInfo.title}
                </span>
                <CloseButton/>
            </header>

            <form className="my-4 w-full">
                <textarea 
                className="min-w-[384px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thinn"
                placeholder="Conte com detalhes o que está acontecendo..."
                ></textarea>
            </form>
        </>
    )
}