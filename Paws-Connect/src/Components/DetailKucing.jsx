import React from "react";

const DetailKucing = ({ details, isLoading }) => {
  if (isLoading) {
    return <div className={styles.loadingContainer}>Memuat detail...</div>;
  }

  if (!details) {
    return <div className={styles.errorContainer}>Detail tidak tersedia</div>;
  }

  const detailItems = [
    { label: "Tersedia", value: details.available },
    { label: "Warna Bulu", value: details.color },
    { label: "Jenis Bulu", value: details.type },
    { label: "Gender", value: details.gender },
    { label: "Berat", value: details.weight },
    { label: "Tanggal Lahir", value: details.born },
    { label: "Vaksinasi", value: details.vaccinated },
    { label: "Kepribadian", value: details.personality },
    { label: "Kontak WA", value: details.phoneNumber },
  ];

  return (
    <div className="bg-greyLighter p-4 mr-2 space-y-4">
      <h1 className="text-secondary text-xl font-semibold font-Satoshi-Regulerbold">
        {details.name}
      </h1>
      <p className="mt-4 text-base font-light font-Satoshi-Light">
        {details.longDetails}
      </p>
      <div className="mt-4 w-full text-base font-light font-Satoshi-Light">
        <div className="grid grid-cols-2 gap-y-1">
          {detailItems.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-base font-light font-Satoshi-Light">
                {item.label}
              </span>
              <span className="text-base font-light font-Satoshi-Light">
                : {item.value}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailKucing;
