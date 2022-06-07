import BackButton from './BackButton'

export default function Content({}) {
    return (
        <div className={'xl:container mx-auto'}>
            <div className={'xl:px-60 lg:px-40 sm:px-10 px-4'}>
                <div className={'flex flex-col items-center flex-col py-[100px]'}>
                    <div className={'max-w-[265px]'}>
                        <p className={'text-base text-Text01 font-normal'}>
                            Alldone GmbH <br />
                            Neue Schönhauser Strasse 9 <br />
                            10178 Berlin <br />
                            Commercial register: HRB 214608B <br />
                            Tax number: 30 / 205 / 51005 <br />
                            CEO: Karsten Wysk <br />
                            Contact: Karsten@AllDone.app <br />
                            VAT ID: DE334674051
                        </p>
                        <h4 className={'text-base text-Text01 font-medium pt-8 pb-4'}>Betriebsstätte Potsdam</h4>
                        <p className={'text-base text-Text01 font-normal'}>
                            Alldone GmbH <br />
                            c/o Unicorn Workspaces <br />
                            Am Neuen Markt 9 E-F <br />
                            14467 Potsdam <br />
                            Germany
                        </p>

                        <div className={'flex flex-col items-center'}>
                            <BackButton customClass={'mt-14'} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
