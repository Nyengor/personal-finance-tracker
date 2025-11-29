import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LegendPayload } from 'recharts';
import { DataKey } from 'recharts/types/util/types';

export default function Financegraph() {
    const LegendEffectOpacity = () => {
        let pvOpacity = 1;
        let uvOpacity = 1;

        if (hoveringDataKey === 'uv') pvOpacity = 0.5;
        if (hoveringDataKey === 'pv') uvOpacity = 0.5;

        const handleMouseEnter = (payload) => setHoveringDataKey(payload.dataKey);
        const handleMouseLeave = () => setHoveringDataKey(undefined);

        return (
            <>
                <div className='h-64 bg-white p-4 rounded shadow'>
                    <p>Expenditure</p>
                    <div style={{ width: '100%' }}>
                        <LineChart
                            style={{ width: '100%', maxWidth: '300px', maxHeight: '70vh', aspectRatio: 1.618 }}
                            responsive
                            data={data}
                            margin={{
                                top: 20,
                                right: 0,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis width="auto" />
                            <Tooltip />
                            <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
                            <Line type="monotone" dataKey={catergry1} strokeOpacity={category1Opacity} stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey={category2} strokeOpacity={category2Opacity} stroke="#82ca9d" />
                        </LineChart>
                        <p className="notes">Tips: Hover the legend !</p>
                    </div>


                </div>
            </>
        )
    }}