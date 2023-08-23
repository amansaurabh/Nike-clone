import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
    return (
        <section
            id="about-us"
            className="flex justify-between items-center max-lg:flex-col gap-10 max-h-full max-container"
        >
            <div className="flex flex-1 flex-col">
                <h2 className='mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
                    We Provide You
                    <span className='text-coral-red'> Super </span>
                    <span className='text-coral-red'>Quality </span> Shoes
                </h2>
                <p className='mt-4 lg:max-w-lg info-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dolores dolorum cumque natus inventore, ullam veritatis illo quibusdam, dolore, unde explicabo a corporis consequatur magnam? Accusamus quae dolores ullam iure.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, sit?</p>
                <div className="mt-11">
                    <Button label="View details" />
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain" />
            </div>
        </section>
    )
}

export default SuperQuality
