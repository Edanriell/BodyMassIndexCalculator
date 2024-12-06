type CalculateIdealWeightRangeParameters = {
	minBmi: number;
	maxBmi: number;
	selectedMeasurementSystem: "metric" | "imperial" | null;
	heightMetric: number | null;
	heightImperialFt: number | null;
	heightImperialIn: number | null;
};

export const calculateIdealWeightRange = ({
	minBmi,
	maxBmi,
	selectedMeasurementSystem,
	heightMetric,
	heightImperialFt,
	heightImperialIn
}: CalculateIdealWeightRangeParameters) => {
	if (selectedMeasurementSystem === "metric") {
		if (!heightMetric) return null;
		const heightInMeters = heightMetric / 100;
		const minWeight = (minBmi * heightInMeters * heightInMeters).toFixed(1);
		const maxWeight = (maxBmi * heightInMeters * heightInMeters).toFixed(1);
		return `${minWeight}kgs - ${maxWeight}kgs.`;
	} else if (selectedMeasurementSystem === "imperial") {
		const totalHeightInInches = (heightImperialFt || 0) * 12 + (heightImperialIn || 0);
		if (!totalHeightInInches) return null;

		const minWeightLbs = Math.ceil((minBmi * totalHeightInInches ** 2) / 703);
		const maxWeightLbs = Math.floor((maxBmi * totalHeightInInches ** 2) / 703);

		const convertToStLbs = (lbs: number) => {
			const stones = Math.floor(lbs / 14);
			const pounds = lbs % 14;
			return `${stones}st ${pounds}lbs`;
		};

		return `${convertToStLbs(minWeightLbs)} - ${convertToStLbs(maxWeightLbs)}.`;
	}
	return null;
};
